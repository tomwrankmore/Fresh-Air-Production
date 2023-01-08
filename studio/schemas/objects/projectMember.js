export default {
  type: 'object',
  name: 'projectMember',
  title: 'Project Member',
  fields: [
    {
      title: 'Staff Member',
      name: 'staffMember',
      type: 'reference',
      to: {type: 'staffMember'}
    },
    {
      title: 'Roles',
      name: 'roles',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'radio',
        list: [
          {title: 'Designer', value: 'designer'},
          {title: 'Developer', value: 'developer'},
          {title: 'Editor', value: 'editor'},
          {title: 'Manager', value: 'manager'}
        ]
      }
    }
  ],
  preview: {
    select: {
      personName: 'staffMember.name',
      roles: 'roles',
      media: 'staffMember.image'
    },
    prepare (data) {
      return {
        ...data,
        title: data.personName,
        subtitle: data.roles && data.roles.join('/')
      }
    }
  }
}
