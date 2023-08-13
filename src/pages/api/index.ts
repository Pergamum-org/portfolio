import dayjs from "dayjs"
import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from 'nodemailer'

export default async function POST(req: NextApiRequest, res: NextApiResponse){
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    }
  }) 

  const { email, name } = req.body

  const options = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `O ${name} entrou em contato às ${dayjs().format('DD/MM/YYYY')}`,
    text: `O email do usuário é: ${email}`
  }

  transporter.sendMail(options, (error, info) => {
    if (error) {
      return res.status(400).end()
    } else {
      return res.status(200).end()
    }
  })

  return res.status(200).end()
}