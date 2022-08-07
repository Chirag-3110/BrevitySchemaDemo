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
      CreatedBy
      OwnedBy
      createdAt
      updatedAt
      userOrganizationWorkFlowId
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
      CreatedBy
      OwnedBy
      createdAt
      updatedAt
      userOrganizationWorkFlowId
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
      CreatedBy
      OwnedBy
      createdAt
      updatedAt
      userOrganizationWorkFlowId
    }
  }
`;
export const createWorkflowDefinition = /* GraphQL */ `
  mutation CreateWorkflowDefinition(
    $input: CreateWorkflowDefinitionInput!
    $condition: ModelWorkflowDefinitionConditionInput
  ) {
    createWorkflowDefinition(input: $input, condition: $condition) {
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
export const updateWorkflowDefinition = /* GraphQL */ `
  mutation UpdateWorkflowDefinition(
    $input: UpdateWorkflowDefinitionInput!
    $condition: ModelWorkflowDefinitionConditionInput
  ) {
    updateWorkflowDefinition(input: $input, condition: $condition) {
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
export const deleteWorkflowDefinition = /* GraphQL */ `
  mutation DeleteWorkflowDefinition(
    $input: DeleteWorkflowDefinitionInput!
    $condition: ModelWorkflowDefinitionConditionInput
  ) {
    deleteWorkflowDefinition(input: $input, condition: $condition) {
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
export const createUserNotifications = /* GraphQL */ `
  mutation CreateUserNotifications(
    $input: CreateUserNotificationsInput!
    $condition: ModelUserNotificationsConditionInput
  ) {
    createUserNotifications(input: $input, condition: $condition) {
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
export const updateUserNotifications = /* GraphQL */ `
  mutation UpdateUserNotifications(
    $input: UpdateUserNotificationsInput!
    $condition: ModelUserNotificationsConditionInput
  ) {
    updateUserNotifications(input: $input, condition: $condition) {
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
export const deleteUserNotifications = /* GraphQL */ `
  mutation DeleteUserNotifications(
    $input: DeleteUserNotificationsInput!
    $condition: ModelUserNotificationsConditionInput
  ) {
    deleteUserNotifications(input: $input, condition: $condition) {
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
export const createTaskCommentMapping = /* GraphQL */ `
  mutation CreateTaskCommentMapping(
    $input: CreateTaskCommentMappingInput!
    $condition: ModelTaskCommentMappingConditionInput
  ) {
    createTaskCommentMapping(input: $input, condition: $condition) {
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
export const updateTaskCommentMapping = /* GraphQL */ `
  mutation UpdateTaskCommentMapping(
    $input: UpdateTaskCommentMappingInput!
    $condition: ModelTaskCommentMappingConditionInput
  ) {
    updateTaskCommentMapping(input: $input, condition: $condition) {
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
export const deleteTaskCommentMapping = /* GraphQL */ `
  mutation DeleteTaskCommentMapping(
    $input: DeleteTaskCommentMappingInput!
    $condition: ModelTaskCommentMappingConditionInput
  ) {
    deleteTaskCommentMapping(input: $input, condition: $condition) {
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
