import React, {useEffect, useState} from 'react';
import instance from "../utils/client"


const Dashboard = () => {
        const [Username, SetUsername] = useState('')



        useEffect(() => {
            instance.get("/me"
            ).then((response) => {
                if (response.status === 200) {
                    SetUsername(response.data.username)
                    console.log(response)
                }
            }).catch((err) => {
                console.log(err)

            })
        })


        return (
            <div>
                <h1> Hello {Username}</h1>


            </div>


        );
    }
;

export default Dashboard;