import { Patterns } from '/constants/patterns'
import Joi from 'joi'

export const BranchCodeJoi = Joi.string().max(255).pattern(Patterns.branch.code)
