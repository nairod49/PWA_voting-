import Router from "@koa/router";
import * as VoteControllers from './vote_controllers.js'

const vote = new Router()

vote.get('/',VoteControllers.index)
vote.post('/',VoteControllers.create)
vote.del('/:id', VoteControllers.del)
vote.put('/A/:id', VoteControllers.update_A)
export default vote