import SESV2 from '@/api/v1/AWS/SESV2'
import { A } from '@/components/Design'
import { ListContactListsRequest } from 'aws-sdk/clients/sesv2'

interface Props {
	searchParams: ListContactListsRequest
}

export default async function Page({
	searchParams: { NextToken, PageSize }
}: Props) {
	const pathname = `/SESV2/listContactLists`
	const { ContactLists, NextToken: NextTokenResponse } =
		await SESV2.listContactLists({
			NextToken,
			PageSize
		}).promise()
	return (
		<>
			<div className="m-5">
				{ContactLists?.map(
					({ ContactListName, LastUpdatedTimestamp }, index) => (
						<div key={index}>
							{LastUpdatedTimestamp?.toLocaleString('pt-BR')}
							<A
								className="ml-5"
								href={{ pathname: `/SESV2/listContacts/${ContactListName}` }}
							>
								{ContactListName}
							</A>
						</div>
					)
				)}
			</div>
			{NextTokenResponse && (
				<A
					className="uppercase"
					href={{ pathname, query: { NextToken: NextTokenResponse, PageSize } }}
				>
					Next page
				</A>
			)}
		</>
	)
}
