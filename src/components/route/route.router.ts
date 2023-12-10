import { Router } from 'express'
import { parseRoute } from './route.controller'
import { verifyFileRequest } from './route.middleware'

const router: Router = Router()

router.post('/parse', verifyFileRequest, parseRoute)

export default router
