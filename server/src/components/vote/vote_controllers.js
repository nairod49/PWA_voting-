import Vote from "./vote_models.js";
import Joi from "joi";

 export async function index (ctx) {
    try {
      const vote = await Vote.find({})
      ctx.ok(vote)
    } catch (e) {
      ctx.badRequest({ message: e.message })
    }
  }

  export async function update_A (ctx) {
    try {
      const listValidationSchema = Joi.object({
        nb_a:Joi.number().required()
      })
      const { error, value } = listValidationSchema.validate(ctx.request.body)
      if(error) throw new Error(error)
      
      const list = await List.findByIdAndUpdate(ctx.params.id, value, { runValidators: true, new: true })
      ctx.ok(list)
    } catch (e) {
      ctx.badRequest({ message: e.message })
    }
  }
  
export async function create (ctx) {
    try {
      const VoteValidationSchema = Joi.object({
        title: Joi.string().required(),
        reponse_A: Joi.string().required(),
        reponse_B: Joi.string().required(),
        nb_a: Joi.number(),
        nb_b: Joi.number()
      })
      const { error, value } = VoteValidationSchema.validate(ctx.request.body)
      if(error) throw new Error(error)
      const vote = await Vote.create(value)
      ctx.ok(vote)
    } catch (e) {
      ctx.badRequest({ message: e.message })
    }
  }

  export async function del (ctx) {
    try {
      await Vote.findByIdAndDelete(ctx.params.id)
      ctx.ok()
    } catch (error ) {
      ctx.badRequest({ message: error.message })
    }
  }
