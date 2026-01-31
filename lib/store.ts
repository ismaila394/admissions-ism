// Types
export type UserRole = 'candidat' | 'agent' | 'directeur' | 'superviseur' | 'it' | 'admin'

export interface User {
  id: string
  email: string
  password: string
  nom: string
  prenom: string
  role: UserRole
  ecole?: string
}

export type ApplicationStatus = 
  | 'soumise' 
  | 'en_verification' 
  | 'a_completer' 
  | 'verifiee' 
  | 'validee' 
  | 'rejetee' 
  | 'en_attente_it' 
  | 'complete'

export interface Application {
  id: string
  numero: string
  // Informations personnelles
  nom: string
  prenom: string
  dateNaissance: string
  lieuNaissance: string
  sexe: 'M' | 'F'
  nationalite: string
  photo?: string
  // Contact
  telephone: string
  telephoneParent: string
  email: string
  adresse: string
  // Formation
  ecole: string
  classe: string
  niveau: string
  // Documents
  documents: {
    cni?: string
    diplome?: string
    certificatScolarite?: string
    certificatMedical?: string
  }
  // Statut et suivi
  status: ApplicationStatus
  dateCreation: string
  dateMiseAJour: string
  agentId?: string
  directeurId?: string
  commentaires: {
    date: string
    auteur: string
    message: string
  }[]
  // IT
  emailISM?: string
  motDePasseTemp?: string
  numeroCarteEtudiant?: string
  candidatId?: string
}

export interface School {
  id: string
  nom: string
  code: string
  classes: {
    id: string
    nom: string
    niveau: string
  }[]
}

// Données simulées
export const schools: School[] = [
  {
    id: '1',
    nom: 'ISM Dakar',
    code: 'ISM-DKR',
    classes: [
      { id: 'l1-info', nom: 'Licence 1 Informatique', niveau: 'L1' },
      { id: 'l2-info', nom: 'Licence 2 Informatique', niveau: 'L2' },
      { id: 'l3-info', nom: 'Licence 3 Informatique', niveau: 'L3' },
      { id: 'l1-gestion', nom: 'Licence 1 Gestion', niveau: 'L1' },
      { id: 'l2-gestion', nom: 'Licence 2 Gestion', niveau: 'L2' },
      { id: 'l3-gestion', nom: 'Licence 3 Gestion', niveau: 'L3' },
      { id: 'm1-info', nom: 'Master 1 Informatique', niveau: 'M1' },
      { id: 'm2-info', nom: 'Master 2 Informatique', niveau: 'M2' },
    ]
  },
  {
    id: '2',
    nom: 'ISM Saint-Louis',
    code: 'ISM-STL',
    classes: [
      { id: 'l1-commerce', nom: 'Licence 1 Commerce', niveau: 'L1' },
      { id: 'l2-commerce', nom: 'Licence 2 Commerce', niveau: 'L2' },
      { id: 'l3-commerce', nom: 'Licence 3 Commerce', niveau: 'L3' },
      { id: 'm1-marketing', nom: 'Master 1 Marketing', niveau: 'M1' },
    ]
  },
  {
    id: '3',
    nom: 'ISM Ziguinchor',
    code: 'ISM-ZIG',
    classes: [
      { id: 'l1-finance', nom: 'Licence 1 Finance', niveau: 'L1' },
      { id: 'l2-finance', nom: 'Licence 2 Finance', niveau: 'L2' },
      { id: 'l3-finance', nom: 'Licence 3 Finance', niveau: 'L3' },
    ]
  }
]

// Utilisateurs par défaut
export const defaultUsers: User[] = [
  { id: '1', email: 'admin@ism.sn', password: 'admin123', nom: 'Admin', prenom: 'System', role: 'admin' },
  { id: '2', email: 'agent@ism.sn', password: 'agent123', nom: 'Diallo', prenom: 'Fatou', role: 'agent' },
  { id: '3', email: 'directeur@ism.sn', password: 'dir123', nom: 'Ndiaye', prenom: 'Moussa', role: 'directeur', ecole: 'ISM Dakar' },
  { id: '4', email: 'superviseur@ism.sn', password: 'sup123', nom: 'Sall', prenom: 'Aminata', role: 'superviseur' },
  { id: '5', email: 'it@ism.sn', password: 'it123', nom: 'Fall', prenom: 'Ibrahima', role: 'it' },
]

// Candidatures de démonstration
export const demoApplications: Application[] = [
  {
    id: '1',
    numero: 'ISM-2026-0001',
    nom: 'Diop',
    prenom: 'Amadou',
    dateNaissance: '2005-03-15',
    lieuNaissance: 'Dakar',
    sexe: 'M',
    nationalite: 'Sénégalaise',
    telephone: '+221 77 123 45 67',
    telephoneParent: '+221 77 987 65 43',
    email: 'amadou.diop@gmail.com',
    adresse: '123 Rue Carnot, Dakar',
    ecole: 'ISM Dakar',
    classe: 'Licence 1 Informatique',
    niveau: 'L1',
    documents: {
      cni: '/documents/cni-diop.pdf',
      diplome: '/documents/bac-diop.pdf',
    },
    status: 'soumise',
    dateCreation: '2026-01-28T10:30:00',
    dateMiseAJour: '2026-01-28T10:30:00',
    commentaires: []
  },
  {
    id: '2',
    numero: 'ISM-2026-0002',
    nom: 'Faye',
    prenom: 'Mariama',
    dateNaissance: '2004-07-22',
    lieuNaissance: 'Thiès',
    sexe: 'F',
    nationalite: 'Sénégalaise',
    telephone: '+221 76 234 56 78',
    telephoneParent: '+221 76 876 54 32',
    email: 'mariama.faye@outlook.com',
    adresse: '45 Avenue Lamine Gueye, Thiès',
    ecole: 'ISM Dakar',
    classe: 'Licence 2 Gestion',
    niveau: 'L2',
    documents: {
      cni: '/documents/cni-faye.pdf',
      diplome: '/documents/l1-faye.pdf',
      certificatScolarite: '/documents/scolarite-faye.pdf',
    },
    status: 'verifiee',
    dateCreation: '2026-01-27T14:15:00',
    dateMiseAJour: '2026-01-28T09:00:00',
    agentId: '2',
    commentaires: [
      { date: '2026-01-28T09:00:00', auteur: 'Fatou Diallo', message: 'Documents vérifiés et conformes' }
    ]
  },
  {
    id: '3',
    numero: 'ISM-2026-0003',
    nom: 'Sarr',
    prenom: 'Ousmane',
    dateNaissance: '2003-11-08',
    lieuNaissance: 'Saint-Louis',
    sexe: 'M',
    nationalite: 'Sénégalaise',
    telephone: '+221 78 345 67 89',
    telephoneParent: '+221 78 765 43 21',
    email: 'ousmane.sarr@yahoo.fr',
    adresse: '78 Rue de la Corniche, Saint-Louis',
    ecole: 'ISM Saint-Louis',
    classe: 'Master 1 Marketing',
    niveau: 'M1',
    documents: {
      cni: '/documents/cni-sarr.pdf',
      diplome: '/documents/licence-sarr.pdf',
      certificatScolarite: '/documents/scolarite-sarr.pdf',
    },
    status: 'validee',
    dateCreation: '2026-01-26T11:45:00',
    dateMiseAJour: '2026-01-28T16:30:00',
    agentId: '2',
    directeurId: '3',
    commentaires: [
      { date: '2026-01-27T10:00:00', auteur: 'Fatou Diallo', message: 'Dossier complet' },
      { date: '2026-01-28T16:30:00', auteur: 'Moussa Ndiaye', message: 'Candidature validée - Excellent profil' }
    ]
  },
  {
    id: '4',
    numero: 'ISM-2026-0004',
    nom: 'Ba',
    prenom: 'Aissatou',
    dateNaissance: '2005-01-20',
    lieuNaissance: 'Ziguinchor',
    sexe: 'F',
    nationalite: 'Sénégalaise',
    telephone: '+221 70 456 78 90',
    telephoneParent: '+221 70 654 32 10',
    email: 'aissatou.ba@gmail.com',
    adresse: '12 Rue du Commerce, Ziguinchor',
    ecole: 'ISM Ziguinchor',
    classe: 'Licence 1 Finance',
    niveau: 'L1',
    documents: {
      cni: '/documents/cni-ba.pdf',
    },
    status: 'a_completer',
    dateCreation: '2026-01-29T08:20:00',
    dateMiseAJour: '2026-01-29T15:00:00',
    agentId: '2',
    commentaires: [
      { date: '2026-01-29T15:00:00', auteur: 'Fatou Diallo', message: 'Document diplôme manquant' }
    ]
  },
  {
    id: '5',
    numero: 'ISM-2026-0005',
    nom: 'Niang',
    prenom: 'Modou',
    dateNaissance: '2002-05-12',
    lieuNaissance: 'Kaolack',
    sexe: 'M',
    nationalite: 'Sénégalaise',
    telephone: '+221 77 567 89 01',
    telephoneParent: '+221 77 543 21 09',
    email: 'modou.niang@gmail.com',
    adresse: '34 Avenue Senghor, Kaolack',
    ecole: 'ISM Dakar',
    classe: 'Master 2 Informatique',
    niveau: 'M2',
    documents: {
      cni: '/documents/cni-niang.pdf',
      diplome: '/documents/m1-niang.pdf',
      certificatScolarite: '/documents/scolarite-niang.pdf',
      certificatMedical: '/documents/medical-niang.pdf',
    },
    status: 'en_attente_it',
    dateCreation: '2026-01-25T09:00:00',
    dateMiseAJour: '2026-01-29T11:00:00',
    agentId: '2',
    directeurId: '3',
    commentaires: [
      { date: '2026-01-26T10:00:00', auteur: 'Fatou Diallo', message: 'Dossier complet et vérifié' },
      { date: '2026-01-27T14:00:00', auteur: 'Moussa Ndiaye', message: 'Excellente candidature, validée' },
    ]
  },
  {
    id: '6',
    numero: 'ISM-2026-0006',
    nom: 'Gueye',
    prenom: 'Fatima',
    dateNaissance: '2004-09-30',
    lieuNaissance: 'Dakar',
    sexe: 'F',
    nationalite: 'Sénégalaise',
    telephone: '+221 76 678 90 12',
    telephoneParent: '+221 76 432 10 98',
    email: 'fatima.gueye@outlook.com',
    adresse: '56 Boulevard de la République, Dakar',
    ecole: 'ISM Dakar',
    classe: 'Licence 3 Informatique',
    niveau: 'L3',
    documents: {
      cni: '/documents/cni-gueye.pdf',
      diplome: '/documents/l2-gueye.pdf',
      certificatScolarite: '/documents/scolarite-gueye.pdf',
    },
    status: 'complete',
    dateCreation: '2026-01-20T10:00:00',
    dateMiseAJour: '2026-01-28T17:00:00',
    agentId: '2',
    directeurId: '3',
    emailISM: 'fatima.gueye@ism.sn',
    motDePasseTemp: 'ISM2026FG',
    numeroCarteEtudiant: 'ETU-2026-0006',
    commentaires: [
      { date: '2026-01-21T09:00:00', auteur: 'Fatou Diallo', message: 'Dossier vérifié' },
      { date: '2026-01-22T11:00:00', auteur: 'Moussa Ndiaye', message: 'Validée' },
      { date: '2026-01-28T17:00:00', auteur: 'Ibrahima Fall', message: 'Compte créé et carte générée' }
    ]
  }
]

// Store global simulé (en mémoire)
class DataStore {
  private users: User[] = [...defaultUsers]
  private applications: Application[] = [...demoApplications]
  private currentUser: User | null = null
  private listeners: Set<() => void> = new Set()

  subscribe(listener: () => void) {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  private notify() {
    this.listeners.forEach(listener => listener())
  }

  // Auth
  login(email: string, password: string): User | null {
    const user = this.users.find(u => u.email === email && u.password === password)
    if (user) {
      this.currentUser = user
      if (typeof window !== 'undefined') {
        localStorage.setItem('ism_user', JSON.stringify(user))
      }
      this.notify()
    }
    return user
  }

  logout() {
    this.currentUser = null
    if (typeof window !== 'undefined') {
      localStorage.removeItem('ism_user')
    }
    this.notify()
  }

  getCurrentUser(): User | null {
    if (!this.currentUser && typeof window !== 'undefined') {
      const stored = localStorage.getItem('ism_user')
      if (stored) {
        this.currentUser = JSON.parse(stored)
      }
    }
    return this.currentUser
  }

  registerCandidat(email: string, password: string, nom: string, prenom: string): User {
    const newUser: User = {
      id: `candidat-${Date.now()}`,
      email,
      password,
      nom,
      prenom,
      role: 'candidat'
    }
    this.users.push(newUser)
    this.currentUser = newUser
    if (typeof window !== 'undefined') {
      localStorage.setItem('ism_user', JSON.stringify(newUser))
    }
    this.notify()
    return newUser
  }

  // Applications
  getApplications(filters?: { status?: ApplicationStatus, ecole?: string, niveau?: string }): Application[] {
    let result = [...this.applications]
    if (filters?.status) {
      result = result.filter(a => a.status === filters.status)
    }
    if (filters?.ecole) {
      result = result.filter(a => a.ecole === filters.ecole)
    }
    if (filters?.niveau) {
      result = result.filter(a => a.niveau === filters.niveau)
    }
    return result.sort((a, b) => new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime())
  }

  getApplicationById(id: string): Application | undefined {
    return this.applications.find(a => a.id === id)
  }

  getApplicationByNumero(numero: string): Application | undefined {
    return this.applications.find(a => a.numero === numero)
  }

  getApplicationsByCandidat(candidatId: string): Application[] {
    return this.applications.filter(a => a.candidatId === candidatId)
  }

  createApplication(data: Omit<Application, 'id' | 'numero' | 'status' | 'dateCreation' | 'dateMiseAJour' | 'commentaires'>): Application {
    const numero = `ISM-2026-${String(this.applications.length + 1).padStart(4, '0')}`
    const newApp: Application = {
      ...data,
      id: `app-${Date.now()}`,
      numero,
      status: 'soumise',
      dateCreation: new Date().toISOString(),
      dateMiseAJour: new Date().toISOString(),
      commentaires: []
    }
    this.applications.push(newApp)
    this.notify()
    return newApp
  }

  updateApplicationStatus(
    id: string, 
    status: ApplicationStatus, 
    userId: string, 
    userName: string, 
    comment?: string,
    extraData?: Partial<Application>
  ): Application | undefined {
    const app = this.applications.find(a => a.id === id)
    if (app) {
      app.status = status
      app.dateMiseAJour = new Date().toISOString()
      if (comment) {
        app.commentaires.push({
          date: new Date().toISOString(),
          auteur: userName,
          message: comment
        })
      }
      if (extraData) {
        Object.assign(app, extraData)
      }
      this.notify()
    }
    return app
  }

  // Stats
  getStats() {
    const apps = this.applications
    return {
      total: apps.length,
      soumises: apps.filter(a => a.status === 'soumise').length,
      enVerification: apps.filter(a => a.status === 'en_verification').length,
      aCompleter: apps.filter(a => a.status === 'a_completer').length,
      verifiees: apps.filter(a => a.status === 'verifiee').length,
      validees: apps.filter(a => a.status === 'validee').length,
      rejetees: apps.filter(a => a.status === 'rejetee').length,
      enAttenteIT: apps.filter(a => a.status === 'en_attente_it').length,
      completes: apps.filter(a => a.status === 'complete').length,
      parEcole: schools.map(s => ({
        ecole: s.nom,
        count: apps.filter(a => a.ecole === s.nom).length
      })),
      parNiveau: ['L1', 'L2', 'L3', 'M1', 'M2'].map(n => ({
        niveau: n,
        count: apps.filter(a => a.niveau === n).length
      }))
    }
  }
}

export const dataStore = new DataStore()
