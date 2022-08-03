/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($email: String!) {
    getUser(email: $email) {
      email
      name
      isAdmin
      phone
      superwiserEmail {
        email
        name
        isAdmin
        phone
        organization
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        Designation
        imageUrl
        createdAt
        updatedAt
      }
      organization
      isApproved
      isEmailApproved
      isPhoneVerified
      isGooleSignIn
      isFacebookSignIn
      isGeneralAuthSignIn
      Designation
      imageUrl
      orders {
        nextToken
      }
      notifications {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $email: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        name
        isAdmin
        phone
        organization
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        Designation
        imageUrl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      orderName
      description
      currentStatus
      lastUpDate
      currentTime
      createdDate
      OrderJSON
      dueDate
      createdBy {
        email
        name
        isAdmin
        phone
        organization
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        Designation
        imageUrl
        createdAt
        updatedAt
      }
      lastEditedOn
      lastEditedBy {
        email
        name
        isAdmin
        phone
        organization
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        Designation
        imageUrl
        createdAt
        updatedAt
      }
      tasks {
        nextToken
      }
      users {
        nextToken
      }
      relatedWorkFlow {
        id
        workflowname
        WorkFlowJSON
        WorkFlowDescription
        SaveAsDraft
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      workflowWorkflowOrdersId
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $id: ID
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        orderName
        description
        currentStatus
        lastUpDate
        currentTime
        createdDate
        OrderJSON
        dueDate
        lastEditedOn
        createdAt
        updatedAt
        workflowWorkflowOrdersId
      }
      nextToken
    }
  }
`;
export const getOrderTask = /* GraphQL */ `
  query GetOrderTask($id: ID!) {
    getOrderTask(id: $id) {
      id
      taskStatus
      TaskName
      NextTaskName
      TaskAssignedTo {
        email
        name
        isAdmin
        phone
        organization
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        Designation
        imageUrl
        createdAt
        updatedAt
      }
      isFirstUser
      TaskDescription
      UserFilePathList
      AssignedTimeStamp
      TaskCompletionTime
      DueDate
      orderTasksId {
        id
        orderName
        description
        currentStatus
        lastUpDate
        currentTime
        createdDate
        OrderJSON
        dueDate
        lastEditedOn
        createdAt
        updatedAt
        workflowWorkflowOrdersId
      }
      InformationTo {
        email
        name
        isAdmin
        phone
        organization
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        Designation
        imageUrl
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOrderTasks = /* GraphQL */ `
  query ListOrderTasks(
    $id: ID
    $filter: ModelOrderTaskFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrderTasks(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        taskStatus
        TaskName
        NextTaskName
        isFirstUser
        TaskDescription
        UserFilePathList
        AssignedTimeStamp
        TaskCompletionTime
        DueDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWorkflow = /* GraphQL */ `
  query GetWorkflow($id: ID!) {
    getWorkflow(id: $id) {
      id
      workflowname
      workflowOrders {
        nextToken
      }
      workflowdefinitions {
        nextToken
      }
      WorkFlowJSON
      WorkFlowDescription
      SaveAsDraft
      CreatedBy {
        email
        name
        isAdmin
        phone
        organization
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        Designation
        imageUrl
        createdAt
        updatedAt
      }
      OwnedBy {
        email
        name
        isAdmin
        phone
        organization
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        Designation
        imageUrl
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listWorkflows = /* GraphQL */ `
  query ListWorkflows(
    $id: ID
    $filter: ModelWorkflowFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWorkflows(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        workflowname
        WorkFlowJSON
        WorkFlowDescription
        SaveAsDraft
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWorkflowDefinition = /* GraphQL */ `
  query GetWorkflowDefinition($id: ID!) {
    getWorkflowDefinition(id: $id) {
      workflowdefinitionid
      NodeName
      NextNodeName
      Description
      isRootNode
      WorkFlowName {
        id
        workflowname
        WorkFlowJSON
        WorkFlowDescription
        SaveAsDraft
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
      workflowWorkflowdefinitionsId
    }
  }
`;
export const listWorkflowDefinitions = /* GraphQL */ `
  query ListWorkflowDefinitions(
    $filter: ModelWorkflowDefinitionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkflowDefinitions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        workflowdefinitionid
        NodeName
        NextNodeName
        Description
        isRootNode
        id
        createdAt
        updatedAt
        workflowWorkflowdefinitionsId
      }
      nextToken
    }
  }
`;
export const getUserNotifications = /* GraphQL */ `
  query GetUserNotifications($id: ID!) {
    getUserNotifications(id: $id) {
      userNotificationsId
      NotificationStatus
      NotificationContent
      NotifyTime
      id
      createdAt
      updatedAt
    }
  }
`;
export const listUserNotifications = /* GraphQL */ `
  query ListUserNotifications(
    $filter: ModelUserNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        userNotificationsId
        NotificationStatus
        NotificationContent
        NotifyTime
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTaskCommentMapping = /* GraphQL */ `
  query GetTaskCommentMapping($commentPath: String!) {
    getTaskCommentMapping(commentPath: $commentPath) {
      id
      commentPath
      filePath
      orderTask
      createdAt
      updatedAt
    }
  }
`;
export const listTaskCommentMappings = /* GraphQL */ `
  query ListTaskCommentMappings(
    $commentPath: String
    $filter: ModelTaskCommentMappingFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTaskCommentMappings(
      commentPath: $commentPath
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        commentPath
        filePath
        orderTask
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserOrderMapping = /* GraphQL */ `
  query GetUserOrderMapping($id: ID!) {
    getUserOrderMapping(id: $id) {
      id
      userID
      orderID
      user {
        email
        name
        isAdmin
        phone
        organization
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        Designation
        imageUrl
        createdAt
        updatedAt
      }
      order {
        id
        orderName
        description
        currentStatus
        lastUpDate
        currentTime
        createdDate
        OrderJSON
        dueDate
        lastEditedOn
        createdAt
        updatedAt
        workflowWorkflowOrdersId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserOrderMappings = /* GraphQL */ `
  query ListUserOrderMappings(
    $filter: ModelUserOrderMappingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserOrderMappings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        orderID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const usersByOrganization = /* GraphQL */ `
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
        isAdmin
        phone
        organization
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        Designation
        imageUrl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const orderByOrderID = /* GraphQL */ `
  query OrderByOrderID(
    $orderName: String!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderByOrderID(
      orderName: $orderName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderName
        description
        currentStatus
        lastUpDate
        currentTime
        createdDate
        OrderJSON
        dueDate
        lastEditedOn
        createdAt
        updatedAt
        workflowWorkflowOrdersId
      }
      nextToken
    }
  }
`;
export const nodeByNodeandWorkFlowName = /* GraphQL */ `
  query NodeByNodeandWorkFlowName(
    $NodeName: String!
    $sortDirection: ModelSortDirection
    $filter: ModelWorkflowDefinitionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodeByNodeandWorkFlowName(
      NodeName: $NodeName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        workflowdefinitionid
        NodeName
        NextNodeName
        Description
        isRootNode
        id
        createdAt
        updatedAt
        workflowWorkflowdefinitionsId
      }
      nextToken
    }
  }
`;
export const userByNotifStatus = /* GraphQL */ `
  query UserByNotifStatus(
    $NotificationStatus: NotifStatusEnum!
    $sortDirection: ModelSortDirection
    $filter: ModelUserNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByNotifStatus(
      NotificationStatus: $NotificationStatus
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        userNotificationsId
        NotificationStatus
        NotificationContent
        NotifyTime
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const commentByFilePath = /* GraphQL */ `
  query CommentByFilePath(
    $filePath: String!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskCommentMappingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentByFilePath(
      filePath: $filePath
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        commentPath
        filePath
        orderTask
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
