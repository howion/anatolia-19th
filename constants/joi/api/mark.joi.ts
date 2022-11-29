import { Patterns } from '/constants/patterns'
import Joi from 'joi'

export const MarkNameJoi = Joi.string().max(255).pattern(Patterns.mark.name)
export const MarksJoi = Joi.array().items(MarkNameJoi)
