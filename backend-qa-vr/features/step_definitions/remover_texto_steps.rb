
Given('a string {string}') do |texto|
  @texto = texto
end

Given('os marcadores {string}') do |marcadores|
  @marcadores = marcadores.split(',')
end

Then('o resultado deve ser {string}') do |esperado|
  resultado = remover_texto(@texto, @marcadores)
  raise "Resultado incorreto" unless resultado == esperado
end
