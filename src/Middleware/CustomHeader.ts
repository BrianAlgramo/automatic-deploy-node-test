export var Headers = () => {
    return {
        'Authorization': `Basic ${Buffer.from(
            `${process.env.JIRAUSER}:${process.env.JIRATOKEN}`
        ).toString('base64')}`,
        'Accept': 'application/json'
    }
  }