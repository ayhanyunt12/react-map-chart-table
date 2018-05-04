/* eslint-disable array-callback-return,react/forbid-prop-types */
import React from 'react';
import {Cell, Pie, PieChart, Tooltip} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

/**
 *
 * @param users array of all users
 * @param posts array of all posts
 * @returns {Array} data that we will use in piechart
 */
const createChartData = (users, posts) => {
    /**
     *  I defined a empty array first then
     *  traverse for every element in users array
     *  if user element's checked value if true
     *  it means this user object has checked in the table
     *  traverse for every element in posts array
     *  if post's userId is equal to user element's id
     *  then increment the count
     *  at last push object to array
     */
    const data = [];
    users.map(user => {
        if (user.checked) {
            let counter = 0;
            posts.map(post => {
                if (post.userId === user.id) {
                    counter += 1;
                }
            });
            data.push({name: user.username, value: counter});
        }
    });
    return data;
};

const ChartComponent = (props) => {
    /**
     * if users not fetched then return null,
     * if users has fetched then return pie
     */
    if (!props.userFetched) {
        return null;
    }
    /**
     * data object for using at drawing pie chart
     */
    const data = createChartData(props.users, props.posts);

    /**
     * if no user has selected then return please select
     * else return pie
     */
    if (data.length === 0) {
        return (
            <h1>Please select a user from table</h1>
        );
    }
    return (
        <PieChart width={800} height={400}>
            <Pie
                dataKey="value"
                isAnimationActive={false}
                data={createChartData(props.users, props.posts)}
                outerRadius={80}
                fill="#8884d8"
                label
            >
                {
                    /**
                     * every element in data pick a color from COLORS array
                     */
                    data.map((entry, index) =>
                        <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />,
                    )
                }
            </Pie>
            <Tooltip />
        </PieChart>
    );
};


export default ChartComponent;
