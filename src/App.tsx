import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Wallet, 
  MagnifyingGlass, 
  Play, 
  TrendUp,
  Shield,
  CurrencyDollar,
  Users,
  CheckCircle,
  Star,
  Cpu,
  Lightning,
  Globe
} from "@phosphor-icons/react"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cpu className="w-8 h-8 text-accent" weight="bold" />
            <span className="text-2xl font-bold text-foreground">RentGPU</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#support" className="text-muted-foreground hover:text-foreground transition-colors">Support</a>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              Log In
            </Button>
            <Button size="sm" className="glow-accent">
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-gradient py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Rent <span className="text-accent">Premium GPUs</span><br />
                at Unbeatable Prices
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Access high-performance computing power instantly, or monetize your idle GPUs. 
                The future of distributed computing starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Button size="lg" className="glow-accent text-lg px-8 py-6">
                  <Play className="w-5 h-5 mr-2" weight="fill" />
                  Rent Now
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10">
                  <TrendUp className="w-5 h-5 mr-2" />
                  Become a Provider
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-8 mt-16 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" weight="fill" />
                  <span>Instant Access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" weight="fill" />
                  <span>Pay Per Hour</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" weight="fill" />
                  <span>Enterprise Security</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get started in minutes with our streamlined process designed for both renters and providers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-center">For GPU Renters</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Wallet className="w-6 h-6 text-accent" weight="bold" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Fund Your Wallet</h4>
                      <p className="text-muted-foreground">Add credits to your account using crypto or traditional payment methods.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <MagnifyingGlass className="w-6 h-6 text-accent" weight="bold" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Search GPUs</h4>
                      <p className="text-muted-foreground">Browse available GPUs by specs, price, and location to find your perfect match.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Play className="w-6 h-6 text-accent" weight="fill" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Start Computing</h4>
                      <p className="text-muted-foreground">Deploy your workloads instantly and monitor usage in real-time.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-8 text-center">For GPU Providers</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Cpu className="w-6 h-6 text-primary" weight="bold" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">List Your GPU</h4>
                      <p className="text-muted-foreground">Register your hardware and set competitive hourly rates.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary" weight="bold" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Secure Hosting</h4>
                      <p className="text-muted-foreground">Our platform ensures secure, isolated environments for all workloads.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <TrendUp className="w-6 h-6 text-primary" weight="bold" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Earn Revenue</h4>
                      <p className="text-muted-foreground">Track your earnings and get paid automatically for every hour rented.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 md:py-32 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Premium GPU Fleet</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Industry-leading hardware at competitive rates. Pay only for what you use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="text-xs">Most Popular</Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">$0.45</div>
                      <div className="text-sm text-muted-foreground">/hour</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">NVIDIA RTX 4090</CardTitle>
                  <CardDescription>Perfect for AI training and high-end gaming</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" weight="fill" />24GB GDDR6X Memory</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" weight="fill" />16,384 CUDA Cores</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" weight="fill" />83 RT Cores (3rd Gen)</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" weight="fill" />512 Tensor Cores (4th Gen)</li>
                  </ul>
                  <Button className="w-full mt-6 glow-accent">
                    Rent Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="text-xs">Enterprise</Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">$1.20</div>
                      <div className="text-sm text-muted-foreground">/hour</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">NVIDIA A100</CardTitle>
                  <CardDescription>Professional AI/ML workloads</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" weight="fill" />40GB HBM2e Memory</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" weight="fill" />6,912 CUDA Cores</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" weight="fill" />432 Tensor Cores (3rd Gen)</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" weight="fill" />1.56TB/s Memory Bandwidth</li>
                  </ul>
                  <Button variant="outline" className="w-full mt-6 border-primary text-primary hover:bg-primary/10">
                    Rent Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-secondary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="text-xs">Budget</Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-secondary">$0.25</div>
                      <div className="text-sm text-muted-foreground">/hour</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">NVIDIA RTX 3080</CardTitle>
                  <CardDescription>Great for development and testing</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-secondary" weight="fill" />10GB GDDR6X Memory</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-secondary" weight="fill" />8,704 CUDA Cores</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-secondary" weight="fill" />68 RT Cores (2nd Gen)</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-secondary" weight="fill" />272 Tensor Cores (3rd Gen)</li>
                  </ul>
                  <Button variant="outline" className="w-full mt-6 border-secondary text-secondary hover:bg-secondary/10">
                    Rent Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose RentGPU</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The most trusted platform for GPU rentals with industry-leading features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-border/50 bg-card/30 backdrop-blur-sm text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <CurrencyDollar className="w-8 h-8 text-accent" weight="bold" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Low-Cost Rentals</h3>
                <p className="text-muted-foreground">Up to 80% savings compared to cloud providers. Pay only for active usage.</p>
              </Card>

              <Card className="border-border/50 bg-card/30 backdrop-blur-sm text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendUp className="w-8 h-8 text-primary" weight="bold" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Extra Earnings</h3>
                <p className="text-muted-foreground">Monetize idle GPUs with up to $500+ monthly passive income potential.</p>
              </Card>

              <Card className="border-border/50 bg-card/30 backdrop-blur-sm text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-secondary" weight="bold" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
                <p className="text-muted-foreground">Enterprise-grade security with automated escrow and instant payouts.</p>
              </Card>

              <Card className="border-border/50 bg-card/30 backdrop-blur-sm text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <Lightning className="w-8 h-8 text-accent" weight="bold" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Easy Onboarding</h3>
                <p className="text-muted-foreground">Get started in under 5 minutes with our streamlined setup process.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Thousands</h2>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">2,500+</div>
                    <div className="text-muted-foreground">Active GPUs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15K+</div>
                    <div className="text-muted-foreground">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">100K+</div>
                    <div className="text-muted-foreground">Jobs Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                    <div className="text-muted-foreground">Uptime</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant="outline" className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>SOC 2 Certified</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>Global Network</span>
                  </Badge>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-accent" weight="bold" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="font-semibold">Sarah Chen</div>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400" weight="fill" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        "Saved our startup $3000/month switching from AWS. The GPU selection is amazing and setup was incredibly smooth."
                      </p>
                      <div className="text-xs text-muted-foreground mt-2">AI Startup Founder</div>
                    </div>
                  </div>
                </Card>

                <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <TrendUp className="w-6 h-6 text-primary" weight="bold" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="font-semibold">Mike Rodriguez</div>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400" weight="fill" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        "My gaming rig now earns $400+ monthly when I'm not using it. Passive income has never been this easy."
                      </p>
                      <div className="text-xs text-muted-foreground mt-2">GPU Provider</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Cpu className="w-6 h-6 text-accent" weight="bold" />
                <span className="text-xl font-bold">RentGPU</span>
              </div>
              <p className="text-muted-foreground text-sm">
                The future of distributed GPU computing. Rent or provide GPUs with enterprise-grade security.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">GPU Fleet</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Provider Program</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Status Page</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Account</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Sign Up</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Log In</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Dashboard</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Billing</a></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div>© 2024 RentGPU. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App