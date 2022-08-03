/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createOrderTask = /* GraphQL */ `
  mutation CreateOrderTask(
    $input: CreateOrderTaskInput!
    $condition: ModelOrderTaskConditionInput
  ) {
    createOrderTask(input: $input, condition: $condition) {
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
export const updateOrderTask = /* GraphQL */ `
  mutation UpdateOrderTask(
    $input: UpdateOrderTaskInput!
    $condition: ModelOrderTaskConditionInput
  ) {
    updateOrderTask(input: $input, condition: $condition) {
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
export const deleteOrderTask = /* GraphQL */ `
  mutation DeleteOrderTask(
    $input: DeleteOrderTaskInput!
    $condition: ModelOrderTaskConditionInput
  ) {
    deleteOrderTask(input: $input, condition: $condition) {
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
export const createWorkflow = /* GraphQL */ `
  mutation CreateWorkflow(
    $input: CreateWorkflowInput!
    $condition: ModelWorkflowConditionInput
  ) {
    createWorkflow(input: $input, condition: $condition) {
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
export const updateWorkflow = /* GraphQL */ `
  mutation UpdateWorkflow(
    $input: UpdateWorkflowInput!
    $condition: ModelWorkflowConditionInput
  ) {
    updateWorkflow(input: $input, condition: $condition) {
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
export const deleteWorkflow = /* GraphQL */ `
  mutation DeleteWorkflow(
    $input: DeleteWorkflowInput!
    $condition: ModelWorkflowConditionInput
  ) {
    deleteWorkflow(input: $input, condition: $condition) {
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
export const createWorkflowDefinition = /* GraphQL */ `
  mutation CreateWorkflowDefinition(
    $input: CreateWorkflowDefinitionInput!
    $condition: ModelWorkflowDefinitionConditionInput
  ) {
    createWorkflowDefinition(input: $input, condition: $condition) {
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
export const updateWorkflowDefinition = /* GraphQL */ `
  mutation UpdateWorkflowDefinition(
    $input: UpdateWorkflowDefinitionInput!
    $condition: ModelWorkflowDefinitionConditionInput
  ) {
    updateWorkflowDefinition(input: $input, condition: $condition) {
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
export const deleteWorkflowDefinition = /* GraphQL */ `
  mutation DeleteWorkflowDefinition(
    $input: DeleteWorkflowDefinitionInput!
    $condition: ModelWorkflowDefinitionConditionInput
  ) {
    deleteWorkflowDefinition(input: $input, condition: $condition) {
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
export const createUserNotifications = /* GraphQL */ `
  mutation CreateUserNotifications(
    $input: CreateUserNotificationsInput!
    $condition: ModelUserNotificationsConditionInput
  ) {
    createUserNotifications(input: $input, condition: $condition) {
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
export const updateUserNotifications = /* GraphQL */ `
  mutation UpdateUserNotifications(
    $input: UpdateUserNotificationsInput!
    $condition: ModelUserNotificationsConditionInput
  ) {
    updateUserNotifications(input: $input, condition: $condition) {
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
export const deleteUserNotifications = /* GraphQL */ `
  mutation DeleteUserNotifications(
    $input: DeleteUserNotificationsInput!
    $condition: ModelUserNotificationsConditionInput
  ) {
    deleteUserNotifications(input: $input, condition: $condition) {
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
export const createTaskCommentMapping = /* GraphQL */ `
  mutation CreateTaskCommentMapping(
    $input: CreateTaskCommentMappingInput!
    $condition: ModelTaskCommentMappingConditionInput
  ) {
    createTaskCommentMapping(input: $input, condition: $condition) {
      id
      commentPath
      filePath
      orderTask
      createdAt
      updatedAt
    }
  }
`;
export const updateTaskCommentMapping = /* GraphQL */ `
  mutation UpdateTaskCommentMapping(
    $input: UpdateTaskCommentMappingInput!
    $condition: ModelTaskCommentMappingConditionInput
  ) {
    updateTaskCommentMapping(input: $input, condition: $condition) {
      id
      commentPath
      filePath
      orderTask
      createdAt
      updatedAt
    }
  }
`;
export const deleteTaskCommentMapping = /* GraphQL */ `
  mutation DeleteTaskCommentMapping(
    $input: DeleteTaskCommentMappingInput!
    $condition: ModelTaskCommentMappingConditionInput
  ) {
    deleteTaskCommentMapping(input: $input, condition: $condition) {
      id
      commentPath
      filePath
      orderTask
      createdAt
      updatedAt
    }
  }
`;
export const createUserOrderMapping = /* GraphQL */ `
  mutation CreateUserOrderMapping(
    $input: CreateUserOrderMappingInput!
    $condition: ModelUserOrderMappingConditionInput
  ) {
    createUserOrderMapping(input: $input, condition: $condition) {
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
export const updateUserOrderMapping = /* GraphQL */ `
  mutation UpdateUserOrderMapping(
    $input: UpdateUserOrderMappingInput!
    $condition: ModelUserOrderMappingConditionInput
  ) {
    updateUserOrderMapping(input: $input, condition: $condition) {
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
export const deleteUserOrderMapping = /* GraphQL */ `
  mutation DeleteUserOrderMapping(
    $input: DeleteUserOrderMappingInput!
    $condition: ModelUserOrderMappingConditionInput
  ) {
    deleteUserOrderMapping(input: $input, condition: $condition) {
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
