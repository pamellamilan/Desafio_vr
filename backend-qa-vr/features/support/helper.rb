def remover_texto(string, marcadores)
  puts "Texto original: #{string}"
  puts "Marcadores: #{marcadores}"

  index = marcadores.map { |m| string.index(m) }.compact.min

  resultado = index ? string[0...index].strip : string

  puts "Resultado final: #{resultado}"

  resultado
end
