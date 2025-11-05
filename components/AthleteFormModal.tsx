import React, { useState } from 'react';

interface AthleteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  onSubmit: (data: AthleteFormData) => void;
}

export interface AthleteFormData {
  nome: string;
  idade: string;
  peso: string;
  altura: string;
  experiencia: string;
  objetivos: string;
  lesoes: string;
  disponibilidade: string;
  telefone: string;
  email: string;
}

const AthleteFormModal: React.FC<AthleteFormModalProps> = ({ isOpen, onClose, planName, onSubmit }) => {
  const [formData, setFormData] = useState<AthleteFormData>({
    nome: '',
    idade: '',
    peso: '',
    altura: '',
    experiencia: '',
    objetivos: '',
    lesoes: '',
    disponibilidade: '',
    telefone: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Questionário - {planName}
            </h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Idade *
                </label>
                <input
                  type="number"
                  name="idade"
                  value={formData.idade}
                  onChange={handleInputChange}
                  required
                  min="15"
                  max="80"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Peso (kg) *
                </label>
                <input
                  type="number"
                  name="peso"
                  value={formData.peso}
                  onChange={handleInputChange}
                  required
                  min="40"
                  max="150"
                  step="0.1"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Altura (cm) *
                </label>
                <input
                  type="number"
                  name="altura"
                  value={formData.altura}
                  onChange={handleInputChange}
                  required
                  min="140"
                  max="220"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Telefone (WhatsApp) *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  required
                  placeholder="(11) 99999-9999"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Experiência no Esporte *
              </label>
              <select
                name="experiencia"
                value={formData.experiencia}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecione sua experiência</option>
                <option value="iniciante">Iniciante (0-1 ano)</option>
                <option value="intermediario">Intermediário (1-3 anos)</option>
                <option value="avancado">Avançado (3+ anos)</option>
                <option value="competitivo">Competitivo</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Disponibilidade para Treinos por Semana *
              </label>
              <select
                name="disponibilidade"
                value={formData.disponibilidade}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecione sua disponibilidade</option>
                <option value="3x">3x por semana</option>
                <option value="4x">4x por semana</option>
                <option value="5x">5x por semana</option>
                <option value="6x">6x por semana</option>
                <option value="diario">Diário</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Objetivos Principais *
              </label>
              <textarea
                name="objetivos"
                value={formData.objetivos}
                onChange={handleInputChange}
                required
                rows={3}
                placeholder="Ex: Completar uma meia maratona, melhorar tempo nos 10k, nadar em águas abertas..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Possui alguma lesão ou limitação física?
              </label>
              <textarea
                name="lesoes"
                value={formData.lesoes}
                onChange={handleInputChange}
                rows={2}
                placeholder="Descreva lesões atuais ou históricas, dores, limitações... (Se não possui, escreva 'Nenhuma')"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Enviar Informações
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AthleteFormModal;