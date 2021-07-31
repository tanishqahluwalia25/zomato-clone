# Zomato Clone

## Documentation

### Get Started:
> 1. Make sure Android Studios, Node and react native&expo is set up in the device
> (Please follow the link if not already set up)
> 2. Fork the repository and run the command 
> 		> _npm i_ or _yarn_
> 3. After the Node Modules are installed, start the project. To start the project run 
>  	 > _expo start_ 
>  4. expo start will start the metro builder for the app, after that started, press **a** in the terminal to start the app in an android emulator. 
>  (make sure to have an emulator or real device connected with before pressing "a")

## Stucked at?
Finding an open api for the restaurant datset was a difficult task. There used to be an api from zomato but the service has been stopped by zomato. I tried using some other resources and fake APIs but they didn't work either.

## Solution?
Since a basic json response of list of restaurants with some details was expected from the app, I created an express server and hosted it on replit for (due to its free services). The server resoponds with a json which I got from a github project.
