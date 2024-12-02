import React, { useState } from 'react';
import { Person } from '../types';
import { PersonModal } from './PersonModal';
import { Edit2, Trash2, UserPlus } from 'lucide-react';

export function PersonList() {
  const [people, setPeople] = useState<Person[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | undefined>();

  const handleDelete = (id: string) => {
    setPeople(people.filter(person => person.id !== id));
  };

  const handleEdit = (person: Person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const handleSave = (person: Person) => {
    if (selectedPerson) {
      setPeople(people.map(p => p.id === person.id ? person : p));
    } else {
      setPeople([...people, person]);
    }
  };

  const handleNew = () => {
    setSelectedPerson(undefined);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Listado de Personas</h1>
        <button
          onClick={handleNew}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <UserPlus className="w-5 h-5 mr-2" />
          Nuevo
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DNI</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombres</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellidos</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cargo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Nac.</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edad</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {people.map((person) => (
              <tr key={person.id}>
                <td className="px-6 py-4 whitespace-nowrap">{person.dni}</td>
                <td className="px-6 py-4 whitespace-nowrap">{person.firstName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{person.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{person.position}</td>
                <td className="px-6 py-4 whitespace-nowrap">{person.birthDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{person.age}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(person)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(person.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {people.length === 0 && (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                  No hay personas registradas
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <PersonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        person={selectedPerson}
      />
    </div>
  );
}