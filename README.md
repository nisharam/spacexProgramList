# spacexProgramList

This project is for showing all the details of the planet in the galaxy and also user can apply filters to get the particular output.

### Design approcach:-
For showing the two columns in the desktop and mobile view, I have used the following approach:-

* Taking the whole container to one row and then dividing them into two seprate columns using css-flex.
* To show the all the filters in the left side , have used proper css flex and styled them.
* To show all the cards in the right side, which displays all the planet details I have used css-flex properties like display:flex which aligns them in row
and flex-wrap to wrap them in the container.
By using this we can have 3 cards on desktop view and 2 cards on tablet . It sets accrording to the screen size.


### Following is the step to set up the project.
* Run ```npm i``` :- It will install all the required dependencies.
* Run ```ng serve``` :- It will run the application.
* Open the browser and type:- http://localhost:4200/

### I have also dockerized the application and following are the steps which needs to followed to get the image :-
*  clone the project using any of method like using http or ssh key method from github repo :-
I am using ssh key and clone using :- ```git clone git@github.com:nisharam/spacexProgramList.git```
* Then run the following command to create the docker image:-

```docker build -t spacexprogram .```
* Then after successfully creating the image , run the docker using the command:-
```docker run --name ng-app-container -d -p 8080:80 spacexprogram```

4.Run the url in the browser using :-
http://localhost:8080/

Now,we can see the webapp running in the browser.

### hosted url:-
The webapp is hosted and  checked on :- https://spacexprogram-9ea25.web.app

