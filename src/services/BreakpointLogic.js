import { suspendors } from "suspendors"

suspendors

function respond(text){ console.log(text) }

class BreakpointLogic{
    respondOnline(){ 
        console.log('respond online')
        suspendors.sm(respond.bind(null,'sm'))
        suspendors.md(respond.bind(null,'md'))
        suspendors.lg(respond.bind(null,'lg'))
        suspendors.landscape(respond.bind(null, 'land'))
        suspendors.portrait(respond.bind(null, 'port'))
    }
}
export const breakpointLogic = new BreakpointLogic()