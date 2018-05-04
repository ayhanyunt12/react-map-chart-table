# Dynamic Map And Chart

In this project, I created a dynamic page with Redux, when users select person from table, piechart and map will be updated.

The project were being designed responsively.

Live Demo: http://172.104.135.186:3000/
### Installing

First clone the project.

```
git clone https://github.com/ayhanyunt12/react-map-chart-table.git
```
Dependencies

```
npm install
```

Start development server
```
npm start
```

### Think
* First option is updating the hardware so server can process multiple requests in short time
* Second option is caching, if same requests were being made to server using an efficient cache system will ease the server.
* Third option is less database process, database queries increase the response time and server works more slowly
so the less database queries executes the more request server can reply.
* The last option is code optimization, programmers need to detect the slow parts of program and develop a new elegant way to
make things faster.

### Frameworks
At the front-end of this project I used Semantic-UI-react(https://react.semantic-ui.com/) for creating layout system.

For drawing pie chart I used Recharts(http://recharts.org/)

For map, I used react-google-maps(https://github.com/tomchentw/react-google-maps)