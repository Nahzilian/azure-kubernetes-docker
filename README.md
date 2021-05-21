# Step to create Kubernetes deployment file

## Step 1: Create `Dockerfile`

**NOTE: This file should be located within the root folder of a project**

Each `Dockerfile` will have different base image, there's no default template of this file


## Step 2: `Create docker-compose.yml` file

**NOTE: This file should be located within the root folder of all projects that you want to stack**

This is one of the common template that we could use:
```
version: "3.5" # This could be 3.9
services: # This declare all of your services
    angular-services: # This is the name of the service
    build: # What to expect when trying to build
        context: ./folder # Replace with the project directory
    image: name-of-image # Put the name of image you want
    ports: # Port you want to host this on
        - "8080:8080"
```

`angular-services`: this could be changed to other name

Alternatively, there are certain things that needed to be taken into consideration, ie. Angular requires different compose styling

```
    ...
    volumes:
        - ./cat-app:/usr/src/app/cat-app
        - /usr/src/app/cat-app/node_modules
    ...
```


Additional information:
- There could be an `environment` field within the file itself. If you are working with Azure function, this is recommended


## Step 3: Creating Kubernetes service

**NOTE: For this step in particular, there's no need for a specific**

There will be 2 main section: Development and Service

The file structure could be formatted something like this:

```
apiVersion: apps/v1
kind: Development
metadata:
    name: service-name
spec:
    replicas: 1
    selector:
        matchLabels:
            label-key: label-value
        spec:
            containers:
            -   name: some-name
                image: image-name
                imagePullPolicy: Never # This is set to never so that it doesn't try to pull the newest update, for local testing
                ports:
                -   containerPort: 80
---
apiVersion: v1
kind: Service
metada:
    labels:
        service-label-key: service-label-value
    name: some-name-for-service
    spec:
        type: ClusterIP
        ports:
        - name: somename
        port: 80
    selector:
        label-key: label-value # Must match the dev one above
```