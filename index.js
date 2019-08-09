function takeANumber(current_line, name) {
  current_line.push(name)
  return (`Welcome, ${name}. You are number ${current_line.indexOf(name) + 1} in line.`)
}

function nowServing(katzDeliLine) {
   var current_customer = katzDeliLine.shift
  return (`Now serving ${current_customer}`)
 
}