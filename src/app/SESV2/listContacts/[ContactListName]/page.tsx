import SESV2 from '@/api/v1/AWS/SESV2'
import { Contact } from 'aws-sdk/clients/sesv2'
import Link from 'next/link'

interface Props {
	params: {
		ContactListName: string
	}
	searchParams: {
		FilteredStatus?: string
		TopicName?: string
		UseDefaultIfPreferenceUnavailable?: boolean
		NextToken?: string
		PageSize?: number
	}
}

export default async function Page({
	params: { ContactListName },
	searchParams: {
		FilteredStatus,
		TopicName,
		UseDefaultIfPreferenceUnavailable,
		NextToken,
		PageSize
	}
}: Props) {
	const pathname = `/SESV2/listContacts/${ContactListName}`
	const { Contacts, NextToken: NextTokenResponse } = await SESV2.listContacts({
		ContactListName,
		Filter: {
			FilteredStatus,
			TopicFilter: {
				TopicName,
				UseDefaultIfPreferenceUnavailable
			}
		},
		NextToken,
		PageSize
	}).promise()
	return (
		<div>
			<table className="table-auto border-collapse border border-white">
				<thead>
					<tr className="font-bold text-center border uppercase">
						<th className="border p-3">Index</th>
						<th className="border p-3">Time</th>
						<th className="border p-3">E-mail</th>
						<th className="border p-3">Topics</th>
					</tr>
				</thead>
				<tbody>
					{Contacts?.map((Contact, index) => (
						<Row {...Contact} key={index} index={index} />
					))}
				</tbody>
			</table>
			{NextTokenResponse && (
				<Link
					href={{
						pathname,
						query: {
							FilteredStatus,
							TopicName,
							UseDefaultIfPreferenceUnavailable,
							NextToken: NextTokenResponse,
							PageSize
						}
					}}
				>
					NEXT PAGE
				</Link>
			)}
		</div>
	)
}

interface RowProps extends Contact {
	index: number
}

function Row({
	EmailAddress,
	TopicPreferences,
	TopicDefaultPreferences,
	UnsubscribeAll,
	LastUpdatedTimestamp,
	index
}: RowProps) {
	const Topics = []
	if (TopicPreferences) Topics.push(...TopicPreferences)
	if (TopicDefaultPreferences) Topics.push(...TopicDefaultPreferences)
	Topics.push({
		TopicName: 'Unsubscribe All',
		SubscriptionStatus: UnsubscribeAll ? 'OPT_IN' : 'OPT_OUT'
	})
	return (
		<tr className="border">
			<td className="border p-3">{index}</td>
			<td className="border p-3">
				{LastUpdatedTimestamp?.toLocaleString('pt-BR')}
			</td>
			<td className="border p-3">{EmailAddress}</td>
			<td className="border p-3">
				{Topics.map(({ TopicName, SubscriptionStatus }, index) => (
					<tr key={index}>
						<td>{TopicName}</td>
						<td>
							<input
								className="ml-3"
								type="checkbox"
								checked={SubscriptionStatus === 'OPT_IN'}
							/>
						</td>
					</tr>
				))}
			</td>
		</tr>
	)
}
