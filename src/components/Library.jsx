import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import robotLogo from '../assets/branding/character_robot_sm.png'
import '../App.css'

// Iconos
import { ArrowLeft, Search, FileText, Video, Headphones, Download } from 'lucide-react'

const Library = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  // Datos de ejemplo para los recursos
  const resources = [
    {
      id: 1,
      title: "Guía de Prospección Efectiva",
      description: "Aprende a identificar y calificar prospectos de alta calidad.",
      type: "document",
      category: "rookie",
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Estructura del Pitch Perfecto",
      description: "Plantilla paso a paso para crear presentaciones de ventas persuasivas.",
      type: "document",
      category: "pitch",
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Técnicas de Negociación Avanzada",
      description: "Estrategias para manejar objeciones y cerrar acuerdos favorables.",
      type: "document",
      category: "battle",
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 4,
      title: "Masterclass: Cierre de Ventas",
      description: "Video tutorial sobre técnicas de cierre efectivas.",
      type: "video",
      category: "boss",
      icon: <Video className="h-5 w-5" />
    },
    {
      id: 5,
      title: "Podcast: Psicología del Comprador",
      description: "Entendiendo las motivaciones y comportamientos de los clientes.",
      type: "audio",
      category: "rookie",
      icon: <Headphones className="h-5 w-5" />
    },
    {
      id: 6,
      title: "Plantillas de Seguimiento",
      description: "Colección de emails y mensajes para seguimiento efectivo.",
      type: "document",
      category: "pitch",
      icon: <FileText className="h-5 w-5" />
    }
  ]

  // Filtrar recursos por búsqueda
  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Obtener recursos por categoría
  const getResourcesByCategory = (category) => {
    return filteredResources.filter(resource => resource.category === category)
  }

  // Renderizar un recurso
  const renderResource = (resource) => (
    <Card key={resource.id} className="bg-card border-border card-hover">
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <div className="bg-muted p-2 rounded-md mr-3">
            {resource.icon}
          </div>
          <CardTitle className="text-lg">{resource.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80">
          {resource.description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full flex items-center"
        >
          <Download className="h-4 w-4 mr-2" />
          Descargar
        </Button>
      </CardFooter>
    </Card>
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
            
            <h1 className="text-xl font-bold">Biblioteca de Recursos</h1>
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
            placeholder="Buscar recursos..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid grid-cols-5 mb-6">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="rookie">Rookie Zone</TabsTrigger>
            <TabsTrigger value="pitch">Pitch Arena</TabsTrigger>
            <TabsTrigger value="battle">Battle Mode</TabsTrigger>
            <TabsTrigger value="boss">Boss Fight</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map(renderResource)}
            </div>
            
            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No se encontraron recursos</h3>
                <p className="text-muted-foreground">
                  Intenta con otra búsqueda o explora las categorías disponibles.
                </p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="rookie" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getResourcesByCategory('rookie').map(renderResource)}
            </div>
            
            {getResourcesByCategory('rookie').length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No se encontraron recursos</h3>
                <p className="text-muted-foreground">
                  No hay recursos disponibles para Rookie Zone con tu búsqueda actual.
                </p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="pitch" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getResourcesByCategory('pitch').map(renderResource)}
            </div>
            
            {getResourcesByCategory('pitch').length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No se encontraron recursos</h3>
                <p className="text-muted-foreground">
                  No hay recursos disponibles para Pitch Arena con tu búsqueda actual.
                </p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="battle" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getResourcesByCategory('battle').map(renderResource)}
            </div>
            
            {getResourcesByCategory('battle').length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No se encontraron recursos</h3>
                <p className="text-muted-foreground">
                  No hay recursos disponibles para Battle Mode con tu búsqueda actual.
                </p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="boss" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getResourcesByCategory('boss').map(renderResource)}
            </div>
            
            {getResourcesByCategory('boss').length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No se encontraron recursos</h3>
                <p className="text-muted-foreground">
                  No hay recursos disponibles para Boss Fight con tu búsqueda actual.
                </p>
              </div>
            )}
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

export default Library
