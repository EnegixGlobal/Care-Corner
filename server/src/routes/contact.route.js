import express from 'express'
const router = express.Router()
import { sendContact } from '../controllers/contact.controller.js'


router.post('/message', sendContact)

export default router