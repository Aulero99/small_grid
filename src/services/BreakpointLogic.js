import { registrar } from "suspendors"

function respond(text){ console.log(text) }

class BreakpointLogic{
    respondOnline(){ 
        console.log('respond online')
        registrar.sm(respond.bind(null,'sm'))
        registrar.md(respond.bind(null,'md'))
        registrar.lg(respond.bind(null,'lg'))
        registrar.landscape(respond.bind(null, 'land'))
        registrar.portrait(respond.bind(null, 'port'))
    }
}
export const breakpointLogic = new BreakpointLogic()