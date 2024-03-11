import nodemailer from 'nodemailer'
import {config} from 'dotenv'

config()

const getConfigNodemail = async () =>{
    const configNodemailer = {
        host: 'smtp.gmail.com',
        port: 587,
        tls:{
            rejectUnauthorized: false
        }
    }

const dataEmails = await getCredencialService()

if(dataEmails.ok){
    let {correo, clave} = dataEmails.data
    configNodemailer.auth = {
        user: correo,
        pass: clave
    }
    }else{
        throw new CredencialError('Error al intentar obtener las credenciales')
    }

    return configNodemailer
}

export const enviarEmail = (text, email, subject = 'BarrelGlow') => {
    return new Promise(async (resolve, reject) =>{
        try{
            const configNodemailer = await getConfigNodemail()
            const transportData = nodemailer.createTransport(configNodemailer)
            const message = {
                from: configNodemailer.auth.user,
                to: email,
                subject,
                text
            }
            const infoRespose = await transportData.sendMail(message)
    
            resolve (infoRespose)
        }catch(error){
            reject(error)
        }
    })
}

