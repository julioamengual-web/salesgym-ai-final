import React, { useState, useEffect } from 'react'
import { ChevronRight, ChevronLeft, User, Globe, Target, Clock, AlertTriangle, Briefcase, DollarSign, Check, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import robotLogo from '../assets/branding/character_robot_sm.png'

const Onboarding = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    fullName: '',
    preferredName: '',
    practiceLanguage: '',
    englishLevel: '',
    goals: [],
    timeAvailability: '',
    obstacles: [],
    email: '',
    company: '',
    position: '',
    isEntrepreneur: false,
    businessName: '',
    sellsProducts: '',
    ticketSize: ''
  })
  
  const [isTyping, setIsTyping] = useState(false)
  const [showInput, setShowInput] = useState(false)

  // Simular efecto de escritura
  useEffect(() => {
    setIsTyping(true)
    setShowInput(false)
    
    const timer = setTimeout(() => {
      setIsTyping(false)
      setShowInput(true)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [currentStep])

  const questions = [
    {
      id: 'welcome',
      type: 'welcome',
      title: '¡Bienvenido a SalesGym AI! 🏋️‍♂️',
      subtitle: 'Vamos a personalizar tu experiencia de entrenamiento de ventas',
      icon: <Zap className="w-8 h-8" />,
      action: 'Comenzar Entrenamiento'
    },
    {
      id: 'fullName',
      type: 'text',
      title: '¿Cuál es tu nombre completo?',
      subtitle: 'Nos ayuda a personalizar tu experiencia de entrenamiento',
      icon: <User className="w-6 h-6" />,
      placeholder: 'Ej: María González López',
      field: 'fullName'
    },
    {
      id: 'preferredName',
      type: 'text',
      title: '¿Cómo te gustaría que te llame tu entrenador de IA?',
      subtitle: 'Puede ser tu nombre de pila o como prefieras',
      icon: <User className="w-6 h-6" />,
      placeholder: 'Ej: María, Mari, Coach...',
      field: 'preferredName'
    },
    {
      id: 'practiceLanguage',
      type: 'select',
      title: '¿En qué idioma quieres entrenar?',
      subtitle: 'Puedes cambiar esto más tarde en tu perfil',
      icon: <Globe className="w-6 h-6" />,
      options: [
        { value: 'spanish', label: 'Solo Español 🇪🇸' },
        { value: 'english', label: 'Solo Inglés 🇺🇸' },
        { value: 'both', label: 'Ambos idiomas 🌍' }
      ],
      field: 'practiceLanguage'
    },
    {
      id: 'englishLevel',
      type: 'select',
      title: '¿Cuál es tu nivel de inglés?',
      subtitle: 'Esto nos ayuda a ajustar la dificultad de las conversaciones',
      icon: <Globe className="w-6 h-6" />,
      options: [
        { value: 'A2', label: 'A2 - Básico' },
        { value: 'B1', label: 'B1 - Intermedio Bajo' },
        { value: 'B2', label: 'B2 - Intermedio Alto' },
        { value: 'C1', label: 'C1 - Avanzado' },
        { value: 'native', label: 'Nativo/Bilingüe' }
      ],
      field: 'englishLevel',
      condition: (data) => data.practiceLanguage === 'english' || data.practiceLanguage === 'both'
    },
    {
      id: 'goals',
      type: 'multiple',
      title: '¿Cuáles son tus objetivos de entrenamiento?',
      subtitle: 'Selecciona todas las áreas que quieres mejorar',
      icon: <Target className="w-6 h-6" />,
      options: [
        { value: 'sales', label: '🎯 Mejorar mis habilidades de ventas' },
        { value: 'prospecting', label: '📞 Llamadas de prospección' },
        { value: 'presentations', label: '📊 Dar mejores presentaciones' },
        { value: 'networking', label: '🤝 Mejorar en eventos de networking' },
        { value: 'negotiations', label: '💼 Negociar con más confianza' },
        { value: 'objections', label: '🛡️ Manejo de objeciones' },
        { value: 'closing', label: '🎉 Técnicas de cierre' },
        { value: 'confidence', label: '💪 Ganar confianza al hablar' }
      ],
      field: 'goals'
    },
    {
      id: 'timeAvailability',
      type: 'select',
      title: '¿Cuánto tiempo puedes dedicar semanalmente?',
      subtitle: 'Esto nos ayuda a crear un plan de entrenamiento personalizado',
      icon: <Clock className="w-6 h-6" />,
      options: [
        { value: '1-2h', label: '⏰ 1-2 horas por semana' },
        { value: '3-5h', label: '⏱️ 3-5 horas por semana' },
        { value: '6-10h', label: '🕐 6-10 horas por semana' },
        { value: '10+h', label: '🚀 Más de 10 horas por semana' }
      ],
      field: 'timeAvailability'
    },
    {
      id: 'obstacles',
      type: 'multiple',
      title: '¿Cuáles son tus principales desafíos?',
      subtitle: 'Selecciona todos los que sientes que te limitan',
      icon: <AlertTriangle className="w-6 h-6" />,
      options: [
        { value: 'fear', label: '😰 Miedo al rechazo' },
        { value: 'shame', label: '😳 Vergüenza o timidez' },
        { value: 'confidence', label: '😔 Falta de confianza' },
        { value: 'experience', label: '🆕 Falta de experiencia' },
        { value: 'language', label: '🗣️ El idioma (inglés)' },
        { value: 'knowledge', label: '📚 Conocimiento del producto/servicio' },
        { value: 'objections', label: '🛡️ Manejo de objeciones' },
        { value: 'closing', label: '🎯 Cerrar ventas/acuerdos' }
      ],
      field: 'obstacles'
    },
    {
      id: 'workInfo',
      type: 'work',
      title: '¿Para qué empresa trabajas?',
      subtitle: 'O si eres emprendedor, cuéntanos sobre tu negocio',
      icon: <Briefcase className="w-6 h-6" />,
      fields: ['email', 'company', 'position', 'isEntrepreneur', 'businessName']
    },
    {
      id: 'businessType',
      type: 'business',
      title: '¿Qué vendes principalmente?',
      subtitle: 'Esto nos ayuda a crear escenarios más realistas para tu entrenamiento',
      icon: <DollarSign className="w-6 h-6" />,
      fields: ['sellsProducts', 'ticketSize']
    },
    {
      id: 'complete',
      type: 'complete',
      title: '¡Tu gimnasio de ventas está listo! 🎉',
      subtitle: 'Hemos personalizado SalesGym AI según tus necesidades',
      icon: <Check className="w-8 h-8" />,
      action: 'Comenzar Entrenamiento'
    }
  ]

  const currentQuestion = questions[currentStep]

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      // Verificar condiciones para saltar preguntas
      let nextStep = currentStep + 1
      const nextQuestion = questions[nextStep]
      
      if (nextQuestion.condition && !nextQuestion.condition(formData)) {
        nextStep += 1
      }
      
      setCurrentStep(nextStep)
    } else {
      onComplete(formData)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      let prevStep = currentStep - 1
      const prevQuestion = questions[prevStep]
      
      // Saltar preguntas con condiciones no cumplidas
      if (prevQuestion.condition && !prevQuestion.condition(formData)) {
        prevStep -= 1
      }
      
      setCurrentStep(prevStep)
    }
  }

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleMultipleSelect = (field, value) => {
    const currentValues = formData[field] || []
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value]
    
    updateFormData(field, newValues)
  }

  const canContinue = () => {
    const question = currentQuestion
    
    if (question.type === 'welcome' || question.type === 'complete') return true
    if (question.type === 'text') return formData[question.field]?.trim()
    if (question.type === 'select') return formData[question.field]
    if (question.type === 'multiple') return (formData[question.field] || []).length > 0
    if (question.type === 'work') {
      return formData.email && (formData.isEntrepreneur ? formData.businessName : (formData.company && formData.position))
    }
    if (question.type === 'business') {
      return formData.sellsProducts && formData.ticketSize
    }
    
    return false
  }

  const renderQuestion = () => {
    const question = currentQuestion

    if (question.type === 'welcome') {
      return (
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <img src={robotLogo} alt="SalesGym AI" className="w-24 h-24 robot-shadow" />
          </motion.div>
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {question.title}
            </motion.h1>
            <motion.p 
              className="text-xl text-salesgym-cyan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {question.subtitle}
            </motion.p>
          </div>
          <motion.button
            onClick={handleNext}
            className="bg-gradient-to-r from-salesgym-cyan to-salesgym-violet hover:from-salesgym-violet hover:to-salesgym-cyan text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 inline-flex items-center transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {question.action}
            <ChevronRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      )
    }

    if (question.type === 'complete') {
      return (
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <Check className="w-10 h-10 text-white" />
          </motion.div>
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {question.title}
            </motion.h1>
            <motion.p 
              className="text-xl text-salesgym-cyan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {question.subtitle}
            </motion.p>
          </div>
          
          {/* Resumen del perfil */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left max-w-md mx-auto border border-salesgym-cyan/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-salesgym-yellow" />
              Tu perfil de entrenamiento:
            </h3>
            <div className="space-y-2 text-salesgym-cyan">
              <p><strong>Nombre:</strong> {formData.preferredName}</p>
              <p><strong>Idioma:</strong> {
                formData.practiceLanguage === 'spanish' ? 'Español' :
                formData.practiceLanguage === 'english' ? 'Inglés' : 'Ambos'
              }</p>
              {formData.englishLevel && <p><strong>Nivel de inglés:</strong> {formData.englishLevel}</p>}
              <p><strong>Objetivos:</strong> {formData.goals?.length || 0} seleccionados</p>
              <p><strong>Tiempo semanal:</strong> {formData.timeAvailability}</p>
            </div>
          </motion.div>
          
          <motion.button
            onClick={handleNext}
            className="bg-gradient-to-r from-salesgym-cyan to-salesgym-violet hover:from-salesgym-violet hover:to-salesgym-cyan text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 inline-flex items-center transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {question.action}
            <ChevronRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      )
    }

    return (
      <div className="max-w-2xl mx-auto">
        {/* Pregunta */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="w-16 h-16 bg-gradient-to-r from-salesgym-cyan to-salesgym-violet rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="text-white">
              {question.icon}
            </div>
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {isTyping ? (
              <span className="inline-block w-3 h-8 bg-salesgym-cyan animate-pulse ml-2"></span>
            ) : (
              question.title
            )}
          </motion.h2>
          {!isTyping && (
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {question.subtitle}
            </motion.p>
          )}
        </motion.div>

        {/* Input */}
        <AnimatePresence>
          {showInput && (
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {question.type === 'text' && (
                <div>
                  <input
                    type="text"
                    placeholder={question.placeholder}
                    value={formData[question.field] || ''}
                    onChange={(e) => updateFormData(question.field, e.target.value)}
                    className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-salesgym-cyan/30 text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-salesgym-cyan focus:border-transparent transition-all duration-300"
                    autoFocus
                  />
                </div>
              )}

              {question.type === 'select' && (
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <motion.button
                      key={option.value}
                      onClick={() => updateFormData(question.field, option.value)}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 transform hover:scale-[1.02] ${
                        formData[question.field] === option.value
                          ? 'bg-gradient-to-r from-salesgym-cyan to-salesgym-violet text-white shadow-lg'
                          : 'bg-white/10 backdrop-blur-sm text-gray-200 hover:bg-white/20 border border-gray-600'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option.label}</span>
                        {formData[question.field] === option.value && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
                          >
                            <Check className="w-4 h-4 text-salesgym-cyan" />
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}

              {question.type === 'multiple' && (
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <motion.button
                      key={option.value}
                      onClick={() => handleMultipleSelect(question.field, option.value)}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center transform hover:scale-[1.02] ${
                        (formData[question.field] || []).includes(option.value)
                          ? 'bg-gradient-to-r from-salesgym-cyan to-salesgym-violet text-white shadow-lg'
                          : 'bg-white/10 backdrop-blur-sm text-gray-200 hover:bg-white/20 border border-gray-600'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div 
                        className={`w-6 h-6 rounded border-2 mr-4 flex items-center justify-center ${
                          (formData[question.field] || []).includes(option.value)
                            ? 'border-white bg-white'
                            : 'border-gray-400'
                        }`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {(formData[question.field] || []).includes(option.value) && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500 }}
                          >
                            <Check className="w-4 h-4 text-salesgym-cyan" />
                          </motion.div>
                        )}
                      </motion.div>
                      <span>{option.label}</span>
                    </motion.button>
                  ))}
                </div>
              )}

              {question.type === 'work' && (
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email || ''}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-salesgym-cyan/30 text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-salesgym-cyan focus:border-transparent transition-all duration-300"
                  />
                  
                  <div className="flex space-x-4">
                    <motion.button
                      onClick={() => updateFormData('isEntrepreneur', false)}
                      className={`flex-1 p-4 rounded-xl transition-all duration-300 ${
                        !formData.isEntrepreneur
                          ? 'bg-gradient-to-r from-salesgym-cyan to-salesgym-violet text-white'
                          : 'bg-white/10 backdrop-blur-sm text-gray-200 hover:bg-white/20 border border-gray-600'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Trabajo en empresa
                    </motion.button>
                    <motion.button
                      onClick={() => updateFormData('isEntrepreneur', true)}
                      className={`flex-1 p-4 rounded-xl transition-all duration-300 ${
                        formData.isEntrepreneur
                          ? 'bg-gradient-to-r from-salesgym-cyan to-salesgym-violet text-white'
                          : 'bg-white/10 backdrop-blur-sm text-gray-200 hover:bg-white/20 border border-gray-600'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Soy emprendedor
                    </motion.button>
                  </div>

                  {!formData.isEntrepreneur ? (
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Nombre de la empresa"
                        value={formData.company || ''}
                        onChange={(e) => updateFormData('company', e.target.value)}
                        className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-salesgym-cyan/30 text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-salesgym-cyan focus:border-transparent transition-all duration-300"
                      />
                      <input
                        type="text"
                        placeholder="Tu puesto/cargo"
                        value={formData.position || ''}
                        onChange={(e) => updateFormData('position', e.target.value)}
                        className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-salesgym-cyan/30 text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-salesgym-cyan focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  ) : (
                    <input
                      type="text"
                      placeholder="Nombre de tu empresa/negocio"
                      value={formData.businessName || ''}
                      onChange={(e) => updateFormData('businessName', e.target.value)}
                      className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-salesgym-cyan/30 text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-salesgym-cyan focus:border-transparent transition-all duration-300"
                    />
                  )}
                </div>
              )}

              {question.type === 'business' && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { value: 'products', label: '📦 Productos físicos' },
                      { value: 'software', label: '💻 Software/SaaS' },
                      { value: 'services', label: '🛠️ Servicios profesionales' },
                      { value: 'consulting', label: '💡 Consultoría' },
                      { value: 'courses', label: '📚 Cursos/Formación' },
                      { value: 'other', label: '🔄 Otro' }
                    ].map((option, index) => (
                      <motion.button
                        key={option.value}
                        onClick={() => updateFormData('sellsProducts', option.value)}
                        className={`w-full p-4 rounded-xl text-left transition-all duration-300 transform hover:scale-[1.02] ${
                          formData.sellsProducts === option.value
                            ? 'bg-gradient-to-r from-salesgym-cyan to-salesgym-violet text-white shadow-lg'
                            : 'bg-white/10 backdrop-blur-sm text-gray-200 hover:bg-white/20 border border-gray-600'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option.label}</span>
                          {formData.sellsProducts === option.value && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
                            >
                              <Check className="w-4 h-4 text-salesgym-cyan" />
                            </motion.div>
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <p className="text-gray-300 text-sm">Ticket promedio de venta:</p>
                    {[
                      { value: 'low', label: '💰 Menos de 1.000€' },
                      { value: 'medium', label: '💰💰 1.000€ - 10.000€' },
                      { value: 'high', label: '💰💰💰 10.000€ - 100.000€' },
                      { value: 'enterprise', label: '💰💰💰💰 Más de 100.000€' }
                    ].map((option, index) => (
                      <motion.button
                        key={option.value}
                        onClick={() => updateFormData('ticketSize', option.value)}
                        className={`w-full p-4 rounded-xl text-left transition-all duration-300 transform hover:scale-[1.02] ${
                          formData.ticketSize === option.value
                            ? 'bg-gradient-to-r from-salesgym-cyan to-salesgym-violet text-white shadow-lg'
                            : 'bg-white/10 backdrop-blur-sm text-gray-200 hover:bg-white/20 border border-gray-600'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index + 6) * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option.label}</span>
                          {formData.ticketSize === option.value && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
                            >
                              <Check className="w-4 h-4 text-salesgym-cyan" />
                            </motion.div>
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-salesgym-dark via-gray-900 to-salesgym-card flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Progress bar */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Paso {currentStep + 1} de {questions.length}</span>
            <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <motion.div 
              className="bg-gradient-to-r from-salesgym-cyan to-salesgym-violet h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Question content */}
        <div className="mb-8">
          {renderQuestion()}
        </div>

        {/* Navigation */}
        {currentQuestion.type !== 'welcome' && currentQuestion.type !== 'complete' && showInput && (
          <motion.div 
            className="flex justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Anterior
            </motion.button>
            
            <motion.button
              onClick={handleNext}
              disabled={!canContinue()}
              className="flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-salesgym-cyan to-salesgym-violet hover:from-salesgym-violet hover:to-salesgym-cyan text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentStep === questions.length - 2 ? 'Finalizar' : 'Continuar'}
              <ChevronRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Onboarding
