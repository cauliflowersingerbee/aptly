import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer , Legend} from 'recharts';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    const colors = ['#9933FF', '#7B87EE', '#7BD2EE' , '#7BEEE9', '#34F288', '#E4F234'];
    useEffect(() => { setData(() => getData()); }, [events]);


    const getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        const data = genres.map((genre) => {
            const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
            return { name: genre, value: value };
        });
        return data;
    };



    return (
        <ResponsiveContainer height={400}>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ percent }) => ` ${(percent * 100).toFixed(0)}%`}
                >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))
                    }
                </Pie>
                <Legend align="center" verticalAlign="top" height={36}/>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default EventGenre;
