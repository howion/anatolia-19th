import { Patterns } from '/constants/patterns'
import Joi from 'joi'

export const UserUsernameJoi = Joi.string().max(255).pattern(Patterns.user.username)
