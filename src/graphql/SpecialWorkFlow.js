const workflowByOrganization = /* GraphQL */ `
  query UsersByOrganization(
    $organization: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByOrganization(
      organization: $organization
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        email
        name
        organization
        OrganizationWorkFlow{
        items {
            id
            workflowname
            userOrganizationWorkFlowId
        }
            nextToken
        }
      }
      nextToken
    }
  }
`;
export default workflowByOrganization