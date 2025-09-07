import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Shield, Users, Star, ChevronDown } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-60 z-0"
        style={{ backgroundImage: "url(/temple-throne-background.jpg)" }}
      />
      <div className="fixed inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80 z-0" />

      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="magical-particle magical-particles"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-amber-500/30 border-magic">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/wyd-logo.png" alt="WYD 5.0" className="h-8 w-auto mystical-pulse" />
            <span className="text-2xl font-bold text-amber-400 rune-glow">WYD 5.0</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              size="lg"
              className="bg-gradient-to-b from-amber-500 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-white px-6 py-2 font-bold mystical-pulse border-2 border-amber-400 shadow-lg shadow-amber-500/50 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Download className="mr-2 h-4 w-4 relative z-10" />
              <span className="relative z-10">DOWNLOAD</span>
            </Button>
            <div className="text-amber-300 text-sm">Conta criada no jogo</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden z-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-6 h-6 bg-amber-500 rounded-full sparkle-effect mystical-pulse"></div>
          <div
            className="absolute top-40 right-32 w-4 h-4 bg-red-500 rounded-full sparkle-effect mystical-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-32 left-1/4 w-5 h-5 bg-amber-500 rounded-full sparkle-effect mystical-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-3 h-3 bg-red-500 rounded-full sparkle-effect mystical-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-4 h-4 bg-amber-500 rounded-full sparkle-effect mystical-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto epic-entrance">
          <div className="mb-6 flex justify-center">
            <img src="/wyd-logo.png" alt="WYD 5.0" className="h-72 w-auto mystical-pulse rune-glow" />
          </div>

          <p
            className="text-xl md:text-2xl text-amber-700 mb-8 text-pretty max-w-2xl mx-auto epic-entrance"
            style={{ animationDelay: "0.3s" }}
          >
            Embarque em uma jornada épica através de reinos místicos. Forje seu destino, conquiste territórios e
            torne-se uma lenda.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 epic-entrance"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="bg-amber-800 hover:bg-amber-700 text-amber-100 px-10 py-5 text-lg font-bold mystical-pulse border-4 border-amber-300 shadow-2xl shadow-amber-500/60 relative overflow-hidden group transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1R1DM-8XKXNmkMTgISMRymnFhCgsGKv-w/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute inset-0 border-2 border-amber-200/50 rounded-lg"></div>
                <Download className="mr-3 h-6 w-6 relative z-10" />
                <span className="relative z-10 tracking-wider">DOWNLOAD GRATUITO</span>
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm epic-entrance" style={{ animationDelay: "0.9s" }}>
            <Badge variant="secondary" className="bg-amber-500/80 text-amber-900 border-amber-500/30 mystical-pulse">
              <Users className="mr-1 h-3 w-3" />
              50.000+ Jogadores Online
            </Badge>
            <Badge variant="secondary" className="bg-red-500/80 text-red-900 border-red-500/30 mystical-pulse">
              <Star className="mr-1 h-3 w-3" />
              Avaliação 4.8/5
            </Badge>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce mystical-pulse">
          <ChevronDown className="h-8 w-8 text-amber-500" />
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 relative z-20">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 epic-title text-amber-700 rune-glow">Baixar WYD 5.0</h2>
            <p className="text-lg text-amber-800 mb-4">Faça o download do cliente do jogo e comece sua aventura</p>
            <p className="text-amber-700 mb-8 font-medium">✨ Sua conta será criada automaticamente dentro do jogo</p>

            <Button
              size="lg"
              className="bg-amber-800 hover:bg-amber-700 text-amber-100 px-16 py-6 text-xl font-bold mb-8 mystical-pulse border-4 border-amber-300 shadow-2xl shadow-amber-500/70 relative overflow-hidden group transform hover:scale-110 transition-all duration-300"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1R1DM-8XKXNmkMTgISMRymnFhCgsGKv-w/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                <div className="absolute inset-0 border-2 border-amber-200/60 rounded-lg"></div>
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-amber-200 rounded-full"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-200 rounded-full"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-amber-200 rounded-full"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-200 rounded-full"></div>
                <Download className="mr-3 h-7 w-7 relative z-10" />
                <span className="relative z-10 tracking-widest">DOWNLOAD DO CLIENTE</span>
              </a>
            </Button>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card className="bg-black/60 border-amber-500/30 border-magic epic-entrance backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-amber-400 rune-glow">Requisitos Mínimos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-amber-100">
                  <p>
                    <strong>OS:</strong> Windows 7 64-bit
                  </p>
                  <p>
                    <strong>Processador:</strong> Intel i3 / AMD FX-6300
                  </p>
                  <p>
                    <strong>Memória:</strong> 4 GB RAM
                  </p>
                  <p>
                    <strong>Gráficos:</strong> GTX 750 / RX 460
                  </p>
                  <p>
                    <strong>Armazenamento:</strong> 25 GB
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-black/60 border-amber-500/30 border-magic epic-entrance backdrop-blur-sm"
                style={{ animationDelay: "0.2s" }}
              >
                <CardHeader>
                  <CardTitle className="text-amber-400 rune-glow">Requisitos Recomendados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-amber-100">
                  <p>
                    <strong>OS:</strong> Windows 10 64-bit
                  </p>
                  <p>
                    <strong>Processador:</strong> Intel i5-8400 / AMD Ryzen 5
                  </p>
                  <p>
                    <strong>Memória:</strong> 8 GB RAM
                  </p>
                  <p>
                    <strong>Gráficos:</strong> GTX 1060 / RX 580
                  </p>
                  <p>
                    <strong>Armazenamento:</strong> 25 GB SSD
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 text-amber-200/60 py-8 px-4 border-t border-amber-500/30 border-magic relative z-20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-5 w-5" />
            <span className="font-bold">WYD 5.0</span>
          </div>
          <p className="text-sm">&copy; 2024 WYD 5.0. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
