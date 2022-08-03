/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateOrderTask = /* GraphQL */ `
  subscription OnCreateOrderTask {
    onCreateOrderTask {
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
export const onUpdateOrderTask = /* GraphQL */ `
  subscription OnUpdateOrderTask {
    onUpdateOrderTask {
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
export const onDeleteOrderTask = /* GraphQL */ `
  subscription OnDeleteOrderTask {
    onDeleteOrderTask {
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
export const onCreateWorkflow = /* GraphQL */ `
  subscription OnCreateWorkflow {
    onCreateWorkflow {
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
export const onUpdateWorkflow = /* GraphQL */ `
  subscription OnUpdateWorkflow {
    onUpdateWorkflow {
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
export const onDeleteWorkflow = /* GraphQL */ `
  subscription OnDeleteWorkflow {
    onDeleteWorkflow {
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
export const onCreateWorkflowDefinition = /* GraphQL */ `
  subscription OnCreateWorkflowDefinition {
    onCreateWorkflowDefinition {
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
export const onUpdateWorkflowDefinition = /* GraphQL */ `
  subscription OnUpdateWorkflowDefinition {
    onUpdateWorkflowDefinition {
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
export const onDeleteWorkflowDefinition = /* GraphQL */ `
  subscription OnDeleteWorkflowDefinition {
    onDeleteWorkflowDefinition {
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
export const onCreateUserNotifications = /* GraphQL */ `
  subscription OnCreateUserNotifications {
    onCreateUserNotifications {
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
export const onUpdateUserNotifications = /* GraphQL */ `
  subscription OnUpdateUserNotifications {
    onUpdateUserNotifications {
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
export const onDeleteUserNotifications = /* GraphQL */ `
  subscription OnDeleteUserNotifications {
    onDeleteUserNotifications {
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
export const onCreateTaskCommentMapping = /* GraphQL */ `
  subscription OnCreateTaskCommentMapping {
    onCreateTaskCommentMapping {
      id
      commentPath
      filePath
      orderTask
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTaskCommentMapping = /* GraphQL */ `
  subscription OnUpdateTaskCommentMapping {
    onUpdateTaskCommentMapping {
      id
      commentPath
      filePath
      orderTask
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTaskCommentMapping = /* GraphQL */ `
  subscription OnDeleteTaskCommentMapping {
    onDeleteTaskCommentMapping {
      id
      commentPath
      filePath
      orderTask
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserOrderMapping = /* GraphQL */ `
  subscription OnCreateUserOrderMapping {
    onCreateUserOrderMapping {
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
export const onUpdateUserOrderMapping = /* GraphQL */ `
  subscription OnUpdateUserOrderMapping {
    onUpdateUserOrderMapping {
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
export const onDeleteUserOrderMapping = /* GraphQL */ `
  subscription OnDeleteUserOrderMapping {
    onDeleteUserOrderMapping {
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
