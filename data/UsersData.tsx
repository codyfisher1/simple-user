
const UsersData = ()=>{
    return {
        "nodes":[
            {
                "user_email":"pat@email.com",
                "user_id":"Pat2020",
                "links":[
                    {"user_id":"Greg4All","relationship":"Best Bud"},
                ]
            },
            {
                "user_email":"gregory@email.com",
                "user_id":"Greg4All",
                "links":[
                    {"user_id":"Pat2020","relationship":"Best Friend"},
                    {"user_id":"TomEvil","relationship":"Worst Enemy"}
                ]
            },
            {
                "user_email":"tom@email.com",
                "user_id":"TomEvil",
                "links":[
                    {"user_id":"Pat2020","relationship":"Best Bud"},
                ]
            },

        ]
    }
}

export default UsersData