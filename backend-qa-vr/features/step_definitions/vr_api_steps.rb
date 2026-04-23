require 'httparty'
require 'json'

Given('que eu faço uma requisição GET para a API VR') do
  @response = HTTParty.get('https://portal.vr.com.br/api-web/comum/enumerations/VRPAT')

  puts "Status Code: #{@response.code}"
  puts "Response (parcial): #{@response.body[0..200]}..."

  @json = JSON.parse(@response.body)
end

Then('o status code deve ser 200') do
  raise "Status inválido" unless @response.code == 200
end

Then('o JSON deve conter a chave {string}') do |chave|
  raise "Chave não encontrada" unless @json.key?(chave)
end

Then('a lista de estabelecimentos deve ser válida') do
  lista = @json['typeOfEstablishment']

  raise "Não é array" unless lista.is_a?(Array)
  raise "Lista vazia" if lista.empty?

  lista.each do |item|
    raise "Item inválido" unless item.is_a?(Hash)
    raise "Chave name não encontrada" unless item.key?("name")
  end
end

Then('devo imprimir um tipo de estabelecimento aleatório') do
  tipo = @json['typeOfEstablishment'].sample

  puts "Tipo sorteado: #{tipo}"

  raise "Valor inválido" if tipo.nil?
end
