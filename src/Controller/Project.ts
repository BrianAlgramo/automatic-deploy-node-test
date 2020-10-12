import axios from "axios";
import express from 'express';


export const root = (request: express.Request, response: express.Response): void => 
{
    response.send("Este es el root");
}

/**
 * Get all projects.
 */
export const getAll = (request: express.Request,response: express.Response): void => {
    try
    {
        axios.get(`${process.env.JIRA}project`, 
        {
            method: 'GET',
            headers:{
                'Authorization': `Basic ${Buffer.from(
                    `${process.env.JIRAUSER}:${process.env.JIRATOKEN}`
                ).toString('base64')}`,
                'Accept': 'application/json'
              }
        })
         .then((axiosResponse) => {
             response.send(axiosResponse.data);
         })
         .catch((err) => {
            response.send(err);
         })
    } catch(err)
    {
        console.log(err)
        response.status(500);
    }
};

/**
 * Get project by id.
 */
export const getById = (request: express.Request, response: express.Response): void => {

    axios.get(`${process.env.JIRA}project/${request.params.projectId}`,
    {
        method: 'GET',
        headers:{
            'Authorization': `Basic ${Buffer.from(
                `${process.env.JIRAUSER}:${process.env.JIRATOKEN}`
            ).toString('base64')}`,
            'Accept': 'application/json'
          }
    })
     .then((axiosResponse) => {
         try
         {
            response.send(axiosResponse.data);
         } catch (er)
         {
            response.send(er);
         }

     })
     .catch((err) => {
        response.send(err);
     })
};


/**
 * Get all issues for a project.
 */
export const getCountIssuesForProject = (request: express.Request, response: express.Response): void => {

    axios.get(`${process.env.JIRA}/search?jql=project=${request.params.projectId}`,
    {
        method: 'GET',
        headers:{
            'Authorization': `Basic ${Buffer.from(
                `${process.env.JIRAUSER}:${process.env.JIRATOKEN}`
            ).toString('base64')}`,
            'Accept': 'application/json'
          }
    })
     .then((axiosResponse) => {
         response.send(axiosResponse.data);
     })
     .catch((err) => {
        response.status(404).json(err);
     })
};


/**
 * Mean Time to faliure
 */
export const getMeanTimeToClose = (request: express.Request, response: express.Response): void => {

    axios.get(`${process.env.JIRA}/search?jql=project=${request.params.projectId}`,
    {
        method: 'GET',
        headers:{
            'Authorization': `Basic ${Buffer.from(
                `${process.env.JIRAUSER}:${process.env.JIRATOKEN}`
            ).toString('base64')}`,
            'Accept': 'application/json'
          }
    })
     .then((axiosResponse) => {
         response.send(axiosResponse.data);
     })
     .catch((err) => {
        console.log("entre" + err)
        response.status(404).json(err);
     })
};

/**
 * Mean Time to faliure
 */
export const getMeanTimeToFaliure = (request: express.Request, response: express.Response): void => {

    axios.get(`${process.env.JIRA}/search?jql=project=${request.params.projectId}`,
    {
        method: 'GET',
        headers:{
            'Authorization': `Basic ${Buffer.from(
                `${process.env.JIRAUSER}:${process.env.JIRATOKEN}`
            ).toString('base64')}`,
            'Accept': 'application/json'
          }
    })
     .then((axiosResponse) => {
         response.send(axiosResponse.data);
     })
     .catch((err) => {
        console.log("entre" + err)
        response.status(404).json(err);
     })
};

/**
 * Mean Time to faliure
 */
export const getMeanTimeBetweenFaliure = (request: express.Request, response: express.Response): void => {

    axios.get(`${process.env.JIRA}/search?jql=project=${request.params.projectId}`,
    {
        method: 'GET',
        headers:{
            'Authorization': `Basic ${Buffer.from(
                `${process.env.JIRAUSER}:${process.env.JIRATOKEN}`
            ).toString('base64')}`,
            'Accept': 'application/json'
          }
    })
     .then((axiosResponse) => {
         response.send(axiosResponse.data);
     })
     .catch((err) => {
        console.log("entre" + err)
        response.status(404).json(err);
     })
};