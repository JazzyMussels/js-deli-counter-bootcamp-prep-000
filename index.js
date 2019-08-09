function takeANumber(current_line, name) {
  current_line.push(name)
  return (`Welcome, ${name}. You are number ${current_line.indexOf(name) + 1} in line.`)
}

function nowServing(katzDeliLine) {
   if (katzDeliLine.length === 0)
   return 
  return (`Now serving ${katzDeliLine.shift}`)
 
}