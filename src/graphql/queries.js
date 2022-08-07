/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($email: String!) {
    getUser(email: $email) {
      email
      name
      isAdmin
      phone
      supervisor
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
      OrganizationWorkFlow {
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
        supervisor
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
      createdDate
      OrderJSON
      dueDate
      createdBy
      lastEditedOn
      lastEditedBy
      createdAt
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
        CreatedBy
        OwnedBy
        createdAt
        updatedAt
        userOrganizationWorkFlowId
      }
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
        createdDate
        OrderJSON
        dueDate
        createdBy
        lastEditedOn
        lastEditedBy
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
      TaskAssignedTo
      isFirstUser
      TaskDescription
      UserFilePathList
      AssignedTimeStamp
      TaskCompletionTime
      DueDate
      orderTasksId
      InformationTo {
        email
        name
        isAdmin
        phone
        supervisor
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
        TaskAssignedTo
        isFirstUser
        TaskDescription
        UserFilePathList
        AssignedTimeStamp
        TaskCompletionTime
        DueDate
        orderTasksId
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
      CreatedBy
      OwnedBy
      createdAt
      updatedAt
      userOrganizationWorkFlowId
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
        CreatedBy
        OwnedBy
        createdAt
        updatedAt
        userOrganizationWorkFlowId
      }
      nextToken
    }
  }
`;
export const getWorkflowDefinition = /* GraphQL */ `
  query GetWorkflowDefinition($id: ID!) {
    getWorkflowDefinition(id: $id) {
      id
      NodeName
      NextNodeName
      Description
      isRootNode
      WorkFlowName
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
        id
        NodeName
        NextNodeName
        Description
        isRootNode
        WorkFlowName
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
      id
      userNotificationsId
      NotificationStatus
      NotificationContent
      NotificationTime
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
        id
        userNotificationsId
        NotificationStatus
        NotificationContent
        NotificationTime
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
      orderTask {
        id
        orderName
        description
        currentStatus
        createdDate
        OrderJSON
        dueDate
        createdBy
        lastEditedOn
        lastEditedBy
        createdAt
        updatedAt
        workflowWorkflowOrdersId
      }
      ParentCommentID {
        id
        commentPath
        filePath
        createdAt
        updatedAt
      }
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
        supervisor
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
        createdDate
        OrderJSON
        dueDate
        createdBy
        lastEditedOn
        lastEditedBy
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
export const userBySuperWisedID = /* GraphQL */ `
  query UserBySuperWisedID(
    $supervisor: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userBySuperWisedID(
      supervisor: $supervisor
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
        supervisor
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
        supervisor
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
export const orderByOrderName = /* GraphQL */ `
  query OrderByOrderName(
    $orderName: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderByOrderName(
      orderName: $orderName
      createdAt: $createdAt
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
        createdDate
        OrderJSON
        dueDate
        createdBy
        lastEditedOn
        lastEditedBy
        createdAt
        updatedAt
        workflowWorkflowOrdersId
      }
      nextToken
    }
  }
`;
export const taskByAsssignedUSer = /* GraphQL */ `
  query TaskByAsssignedUSer(
    $TaskAssignedTo: String!
    $TaskName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    taskByAsssignedUSer(
      TaskAssignedTo: $TaskAssignedTo
      TaskName: $TaskName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        taskStatus
        TaskName
        NextTaskName
        TaskAssignedTo
        isFirstUser
        TaskDescription
        UserFilePathList
        AssignedTimeStamp
        TaskCompletionTime
        DueDate
        orderTasksId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const taskByorderTasksId = /* GraphQL */ `
  query TaskByorderTasksId(
    $orderTasksId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    taskByorderTasksId(
      orderTasksId: $orderTasksId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        taskStatus
        TaskName
        NextTaskName
        TaskAssignedTo
        isFirstUser
        TaskDescription
        UserFilePathList
        AssignedTimeStamp
        TaskCompletionTime
        DueDate
        orderTasksId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const nodeByNodeandWorkFlowName = /* GraphQL */ `
  query NodeByNodeandWorkFlowName(
    $NodeName: String!
    $WorkFlowName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWorkflowDefinitionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodeByNodeandWorkFlowName(
      NodeName: $NodeName
      WorkFlowName: $WorkFlowName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        NodeName
        NextNodeName
        Description
        isRootNode
        WorkFlowName
        createdAt
        updatedAt
        workflowWorkflowdefinitionsId
      }
      nextToken
    }
  }
`;
export const notificationByUser = /* GraphQL */ `
  query NotificationByUser(
    $userNotificationsId: ID!
    $NotificationTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationByUser(
      userNotificationsId: $userNotificationsId
      NotificationTime: $NotificationTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userNotificationsId
        NotificationStatus
        NotificationContent
        NotificationTime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userByNotifcationStatus = /* GraphQL */ `
  query UserByNotifcationStatus(
    $NotificationStatus: NotifStatusEnum!
    $sortDirection: ModelSortDirection
    $filter: ModelUserNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByNotifcationStatus(
      NotificationStatus: $NotificationStatus
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userNotificationsId
        NotificationStatus
        NotificationContent
        NotificationTime
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
