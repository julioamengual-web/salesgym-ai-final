import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import robotLogo from '../assets/branding/character_robot_sm.png'
import '../App.css'

// Iconos
import { ArrowLeft, Search, MessageSquare, ThumbsUp, Share2, Users, Trophy, Calendar } from 'lucide-react'

const Community = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  // Datos de ejemplo para las publicaciones
  const posts = [
    {
      id: 1,
      author: {
        name: "Carlos Rodríguez",
        avatar: null,
        rank: "Sales Champion"
      },
      content: "Acabo de conseguir mi primer cierre usando la técnica de 'Alternativa de Elección' que aprendí en Battle Mode. ¡Increíble cómo funciona!",
      likes: 24,
      comments: 8,
      date: "Hace 2 horas",
      tags: ["técnicas", "cierre", "battle-mode"]
    },
    {
      id: 2,
      author: {
        name: "Laura Martínez",
        avatar: null,
        rank: "Negotiator"
      },
      content: "¿Alguien más ha notado que las objeciones sobre precio son mucho más fáciles de manejar después de practicar en Boss Fight? Mi tasa de conversión ha subido un 15% este mes.",
      likes: 18,
      comments: 12,
      date: "Hace 5 horas",
      tags: ["objeciones", "precio", "boss-fight"]
    },
    {
      id: 3,
      author: {
        name: "Miguel Ángel",
        avatar: null,
        rank: "Closer"
      },
      content: "Comparto mi guión de prospección que ha funcionado muy bien para B2B en el sector tecnológico. ¡Espero que les sirva!",
      likes: 32,
      comments: 15,
      date: "Ayer",
      tags: ["prospección", "B2B", "guión"]
    }
  ]

  // Datos de ejemplo para los eventos
  const events = [
    {
      id: 1,
      title: "Webinar: Psicología de la Persuasión",
      description: "Aprende los 6 principios de persuasión de Cialdini aplicados a ventas B2B.",
      date: "25 de septiembre, 2025",
      time: "18:00 - 19:30",
      attendees: 45
    },
    {
      id: 2,
      title: "Desafío de Ventas: 30 Llamadas en 30 Días",
      description: "Únete a otros vendedores en este reto para mejorar tus habilidades de prospección telefónica.",
      date: "1-30 de octubre, 2025",
      time: "Todo el día",
      attendees: 78
    },
    {
      id: 3,
      title: "Masterclass: Storytelling en Ventas",
      description: "Descubre cómo usar historias para conectar emocionalmente con tus clientes.",
      date: "10 de octubre, 2025",
      time: "12:00 - 13:30",
      attendees: 32
    }
  ]

  // Datos de ejemplo para los rankings
  const rankings = [
    {
      id: 1,
      name: "Ana López",
      avatar: null,
      score: 9850,
      rank: "Sales Champion",
      streak: 45
    },
    {
      id: 2,
      name: "Javier Martín",
      avatar: null,
      score: 8720,
      rank: "Sales Champion",
      streak: 32
    },
    {
      id: 3,
      name: "Carlos Rodríguez",
      avatar: null,
      score: 7650,
      rank: "Sales Champion",
      streak: 28
    },
    {
      id: 4,
      name: "Laura Martínez",
      avatar: null,
      score: 6980,
      rank: "Negotiator",
      streak: 21
    },
    {
      id: 5,
      name: "Miguel Ángel",
      avatar: null,
      score: 5430,
      rank: "Closer",
      streak: 14
    }
  ]

  // Filtrar publicaciones por búsqueda
  const filteredPosts = posts.filter(post => 
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-background">
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
            
            <img 
              src={robotLogo} 
              alt="SalesGym AI Robot" 
              className="w-8 h-8 object-contain mr-3" 
            />
            
            <h1 className="text-xl font-bold">Comunidad de Ventas</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar en la comunidad..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="feed" className="mb-8">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="feed" className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" />
              <span>Feed</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Eventos</span>
            </TabsTrigger>
            <TabsTrigger value="rankings" className="flex items-center">
              <Trophy className="h-4 w-4 mr-2" />
              <span>Rankings</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="feed" className="space-y-6">
            {/* New Post Card */}
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Input
                      placeholder="Comparte tus experiencias, preguntas o consejos..."
                      className="mb-4"
                    />
                    <div className="flex justify-between">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Añadir Imagen
                        </Button>
                        <Button variant="outline" size="sm">
                          Añadir Etiqueta
                        </Button>
                      </div>
                      <Button className="gradient-blue-violet">
                        Publicar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Posts */}
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-card border-border">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="mr-3">
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{post.author.name}</CardTitle>
                        <CardDescription className="flex items-center">
                          <Badge variant="outline" className="mr-2 text-[#FACC15] border-[#FACC15]">
                            {post.author.rank}
                          </Badge>
                          <span>{post.date}</span>
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{post.content}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border pt-4 flex justify-between">
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    <span>{post.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    <span>{post.comments}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <Share2 className="h-4 w-4 mr-2" />
                    <span>Compartir</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <MessageSquare className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No se encontraron publicaciones</h3>
                <p className="text-muted-foreground">
                  No hay publicaciones que coincidan con tu búsqueda.
                </p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="events" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date} • {event.time}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{event.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.attendees} asistentes</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">
                      Más información
                    </Button>
                    <Button className="gradient-blue-violet">
                      Inscribirse
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="rankings" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Top Vendedores</CardTitle>
                <CardDescription>
                  Los mejores atletas de ventas de la comunidad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rankings.map((user, index) => (
                    <div 
                      key={user.id} 
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                    >
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted mr-4 font-bold">
                          {index + 1}
                        </div>
                        <Avatar className="mr-3">
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Badge variant="outline" className="mr-2 text-[#FACC15] border-[#FACC15]">
                              {user.rank}
                            </Badge>
                            <span>{user.streak} días de racha</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-xl font-bold text-primary">
                        {user.score}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Ver Ranking Completo
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 SalesGym AI. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default Community
