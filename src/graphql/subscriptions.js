/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onNotificationByUserId = /* GraphQL */ `
  subscription OnNotificationByUserId($userNotificationsId: ID!) {
    onNotificationByUserId(userNotificationsId: $userNotificationsId) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateOrderTask = /* GraphQL */ `
  subscription OnCreateOrderTask {
    onCreateOrderTask {
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
export const onUpdateOrderTask = /* GraphQL */ `
  subscription OnUpdateOrderTask {
    onUpdateOrderTask {
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
export const onDeleteOrderTask = /* GraphQL */ `
  subscription OnDeleteOrderTask {
    onDeleteOrderTask {
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
      CreatedBy
      OwnedBy
      createdAt
      updatedAt
      userOrganizationWorkFlowId
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
      CreatedBy
      OwnedBy
      createdAt
      updatedAt
      userOrganizationWorkFlowId
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
      CreatedBy
      OwnedBy
      createdAt
      updatedAt
      userOrganizationWorkFlowId
    }
  }
`;
export const onCreateWorkflowDefinition = /* GraphQL */ `
  subscription OnCreateWorkflowDefinition {
    onCreateWorkflowDefinition {
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
export const onUpdateWorkflowDefinition = /* GraphQL */ `
  subscription OnUpdateWorkflowDefinition {
    onUpdateWorkflowDefinition {
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
export const onDeleteWorkflowDefinition = /* GraphQL */ `
  subscription OnDeleteWorkflowDefinition {
    onDeleteWorkflowDefinition {
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
export const onCreateUserNotifications = /* GraphQL */ `
  subscription OnCreateUserNotifications {
    onCreateUserNotifications {
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
export const onUpdateUserNotifications = /* GraphQL */ `
  subscription OnUpdateUserNotifications {
    onUpdateUserNotifications {
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
export const onDeleteUserNotifications = /* GraphQL */ `
  subscription OnDeleteUserNotifications {
    onDeleteUserNotifications {
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
export const onCreateTaskCommentMapping = /* GraphQL */ `
  subscription OnCreateTaskCommentMapping {
    onCreateTaskCommentMapping {
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
export const onUpdateTaskCommentMapping = /* GraphQL */ `
  subscription OnUpdateTaskCommentMapping {
    onUpdateTaskCommentMapping {
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
export const onDeleteTaskCommentMapping = /* GraphQL */ `
  subscription OnDeleteTaskCommentMapping {
    onDeleteTaskCommentMapping {
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
