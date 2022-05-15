// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  response?: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const data = JSON.parse(req.body);

    console.log(data.email)

    const MLresponse = await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.MAILERLITE_TOKEN}`
        },
        body: JSON.stringify({
            'email': data.email
        })
    }).then(res => res.json())

    if(MLresponse.errors){
        res.send({
            response: false
        })
        
        throw('something went wrong')
    }

    res.send({
        response: true
    })
}
