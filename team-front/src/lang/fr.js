export default {
    route: {
      dashboard: 'Tableau de bord',
      membersList: 'Liste des Membres',
      members: 'Membres',
      interviews: 'Entretiens',
      interviewsList: 'Liste des Entretiens'
    },
    navbar: {
      logOut: 'Log Out',
      dashboard: 'Tableau de bord',
      github: 'Github',
      screenfull: 'Screenfull',
      theme: 'Theme',
      size: 'Taille globale'
    },
    login: {
      title: 'Login Formulaire',
      logIn: 'Log in',
      email:'Email',
      password: 'Mot de passe',
      any: 'any',
      thirdparty: 'Or connect with',
      thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
    },
    documentation: {
      documentation: 'Documentation',
      github: 'Github Repository'
    },
    permission: {
      roles: 'Ton rôle',
    },
    guide: {
      description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
      button: 'Show Guide'
    },
    components: {
      documentation: 'Documentation',
      tinymceTips: 'Rich text editor is a core part of management system, but at the same time is a place with lots of problems. In the process of selecting rich texts, I also walked a lot of detours. The common rich text editors in the market are basically used, and the finally chose Tinymce. See documentation for more detailed rich text editor comparisons and introductions.',
      dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
      stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
      backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
      backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
      imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
    },
    table: {
      dynamicTips1: 'Fixed header, sorted by header order',
      dynamicTips2: 'Not fixed header, sorted by click order',
      dragTips1: 'The default order',
      dragTips2: 'The after dragging order',
      title: 'Title',
      importance: 'Imp',
      type: 'Type',
      remark: 'Remark',
      search: 'Rechercher',
      add: 'Ajouter',
      export: 'Exporter',
      members: 'Afficher les membres',
      id: 'ID',
      status: 'Statut',
      actions: 'Actions',
      edit: 'Modifier',
      publish: 'Publier',
      draft: 'Brouillon',
      delete: 'Supprimer',
      cancel: 'Annuler',
      confirm: 'Confirmer',
      interview :{
          synthesis:"Synthèse",
          place: "Lieu",
          subject:"Sujet",
          users: "Membres"
      },
      member :{
          lname:"Nom",
          fname: "Prénom",
          email:"Email",
          team:"Équipe",
          password:"Mot de passe"
      }
    },
    errorLog: {
      tips: 'Please click the bug icon in the upper right corner',
      description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
      documentation: 'Document introduction'
    },
    excel: {
      export: 'Export',
      selectedExport: 'Export Selected Items',
      placeholder: 'Please enter the file name(default excel-list)'
    },
    zip: {
      export: 'Export',
      placeholder: 'Please enter the file name(default file)'
    },
    theme: {
      change: 'Change Theme',
      documentation: 'Theme documentation',
      tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
    },
    tagsView: {
      refresh: 'Refresh',
      close: 'Close',
      closeOthers: 'Close Others',
      closeAll: 'Close All'
    }
  }
