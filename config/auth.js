// exportamos
module.exports={
  secret : process.env.AUTH_SECRET || "disney",
  expires: process.env.AUTH_EXPIRES ||"24hs",
  //salto
  rounds:process.env.AUTH_ROUNDS || 10

}