import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import robotLogo from '../assets/branding/character_robot_sm.png'
import '../App.css'

// Iconos
import { ArrowLeft, Send, Mic, MicOff, Clock, BarChart2, X } from 'lucide-react'

const RolePlay = () => {
  const { scenarioId } = useParams()
  const navigate = useNavigate()
  const messagesEndRef = useRef(null)
  
  const [message, setMessage] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [messages, setMessages] = useState([])
  const [scenario, setScenario] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // Datos de ejemplo para los diferentes escenarios
  const scenarios = {
    rookie: {
      name: 'Rookie Zone',
      description: 'Primer contacto con clientes potenciales',
      color: 'bg-primary',
      metrics: ['Empatía', 'Escucha Activa', 'Calificación']
    },
    pitch: {
      name: 'Pitch Arena',
      description: 'Demostración de producto y presentación de valor',
      color: 'bg-secondary',
      metrics: ['Claridad', 'Persuasión', 'Manejo de Objeciones']
    },
    battle: {
      name: 'Battle Mode',
      description: 'Negociación avanzada y manejo de objeciones',
      color: 'bg-[#FB923C]',
      metrics: ['Negociación', 'Resolución de Problemas', 'Cierre']
    },
    boss: {
      name: 'Boss Fight',
      description: 'Clientes difíciles y situaciones de alta presión',
      color: 'bg-[#FACC15]',
      metrics: ['Resiliencia', 'Adaptabilidad', 'Cierre Avanzado']
    }
  }

  // Cargar el escenario seleccionado
  useEffect(() => {
    if (scenarioId && scenarios[scenarioId]) {
      setScenario(scenarios[scenarioId])
      
      // Mensaje inicial del coach
      setMessages([
        {
          id: 1,
          role: 'coach',
          content: `Bienvenido a ${scenarios[scenarioId].name}. Estoy aquí para ayudarte a entrenar tus habilidades de ventas.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        },
        {
          id: 2,
          role: 'ai',
          content: `Hola, soy tu cliente para el escenario '${scenarios[scenarioId].name}'. ¿Estás listo para comenzar?`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ])
    } else {
      // Si no existe el escenario, redirigir al dashboard
      navigate('/dashboard')
    }
  }, [scenarioId, navigate])

  // Scroll automático al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Función para enviar un mensaje
  const sendMessage = () => {
    if (!message.trim()) return
    
    // Agregar mensaje del usuario
    const userMessage = {
      id: messages.length + 1,
      role: 'user',
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    
    setMessages(prev => [...prev, userMessage])
    setMessage('')
    setIsLoading(true)
    
    // Simular respuesta de la IA después de un breve retraso
    setTimeout(() => {
      const aiResponses = [
        "Interesante punto. ¿Podrías explicarme más sobre los beneficios específicos?",
        "Entiendo tu propuesta, pero me preocupa el costo. ¿Cómo justificas el precio?",
        "Eso suena bien, pero ¿cómo se compara con lo que ya estoy usando?",
        "Necesito pensarlo y consultarlo con mi equipo. ¿Qué opciones tengo mientras tanto?",
        "Me gusta lo que ofreces. ¿Cuáles serían los siguientes pasos?"
      ]
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]
      
      const aiMessage = {
        id: messages.length + 2,
        role: 'ai',
        content: randomResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      
      setMessages(prev => [...prev, aiMessage])
      setIsLoading(false)
    }, 1500)
  }

  // Función para manejar el envío con Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Función para alternar grabación de voz
  const toggleRecording = () => {
    setIsRecording(!isRecording)
    // Aquí iría la lógica de grabación de voz
  }

  // Función para finalizar la sesión
  const endSession = () => {
    // Aquí iría la lógica para guardar la sesión, calcular métricas, etc.
    navigate('/dashboard')
  }

  if (!scenario) return null

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/dashboard')}
              className="mr-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <div className={`${scenario.color} p-2 rounded-md mr-3`}>
              <img 
                src={robotLogo} 
                alt="SalesGym AI Robot" 
                className="w-6 h-6 object-contain" 
              />
            </div>
            
            <div>
              <h1 className="text-lg font-bold">{scenario.name}</h1>
              <p className="text-xs text-muted-foreground">{scenario.description}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>12:45</span>
            </Badge>
            
            <Button 
              variant="destructive" 
              size="sm"
              onClick={endSession}
            >
              <X className="h-4 w-4 mr-1" />
              Finalizar
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role !== 'user' && (
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage 
                    src={msg.role === 'coach' ? robotLogo : null} 
                    alt={msg.role === 'coach' ? "Coach" : "Cliente"} 
                  />
                  <AvatarFallback>
                    {msg.role === 'coach' ? 'C' : 'AI'}
                  </AvatarFallback>
                </Avatar>
              )}
              
              <div className="flex flex-col max-w-[70%]">
                <Card 
                  className={`px-4 py-2 ${
                    msg.role === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : msg.role === 'coach'
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-card text-card-foreground'
                  }`}
                >
                  <p>{msg.content}</p>
                </Card>
                <span className="text-xs text-muted-foreground mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
              
              {msg.role === 'user' && (
                <Avatar className="h-8 w-8 ml-2">
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <Card className="px-4 py-2 bg-card">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </Card>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Area */}
        <div className="border-t border-border pt-4">
          <div className="flex items-end space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleRecording}
              className={isRecording ? 'bg-red-500 text-white hover:bg-red-600' : ''}
            >
              {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </Button>
            
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu mensaje..."
              className="flex-1 min-h-[60px] resize-none"
            />
            
            <Button
              onClick={sendMessage}
              disabled={!message.trim() || isLoading}
              className="gradient-blue-violet"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          
          {isRecording && (
            <div className="mt-2 text-sm text-center text-red-500 animate-pulse">
              Grabando... Haz clic en el micrófono para detener.
            </div>
          )}
        </div>
      </main>

      {/* Footer with Metrics */}
      <footer className="border-t border-border py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <BarChart2 className="h-4 w-4 mr-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Métricas en seguimiento:</span>
            </div>
            
            <div className="flex space-x-2">
              {scenario.metrics.map((metric, index) => (
                <Badge key={index} variant="outline">
                  {metric}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default RolePlay
