document.addEventListener('DOMContentLoaded', () => {
    const bedCount = 10;
    const morningHours = [6, 7, 8, 9, 10, 11];
    const eveningHours = [16, 17, 18, 19, 20]; 
    const allTimeSlots = [...morningHours, ...eveningHours].sort((a, b) => a - b);


    const DEFAULT_PACKAGES = [
        { id: 'prueba', nombre: "Clase de prueba", clases: 1, precio: 150 },
        { id: 'clase1', nombre: "1 Clase", clases: 1, precio: 200 },
        { id: 'clases4', nombre: "4 Clases", clases: 4, precio: 790 },
        { id: 'clases8', nombre: "8 Clases", clases: 8, precio: 1540 },
        { id: 'clases12', nombre: "12 Clases", clases: 12, precio: 2100 },
        { id: 'clases16', nombre: "16 Clases", clases: 16, precio: 2500 },
        { id: 'clases20', nombre: "20 Clases", clases: 20, precio: 2740 }
    ];
    let packages = [];
    const LS_PACKAGES_KEY = "ALIZENPILATES_PACKAGES";

    const DEFAULT_PACKAGES = [
        { id: 'prueba', nombre: "Clase de prueba", clases: 1, precio: 150 },
        { id: 'clase1', nombre: "1 Clase", clases: 1, precio: 200 },
        { id: 'clases4', nombre: "4 Clases", clases: 4, precio: 790 },
        { id: 'clases8', nombre: "8 Clases", clases: 8, precio: 1540 },
        { id: 'clases12', nombre: "12 Clases", clases: 12, precio: 2100 },
        { id: 'clases16', nombre: "16 Clases", clases: 16, precio: 2500 },
        { id: 'clases20', nombre: "20 Clases", clases: 20, precio: 2740 }
    ];
    let packages = [];
    const LS_PACKAGES_KEY = "ALIZENPILATES_PACKAGES";


    let currentDate = new Date(); 
    let clients = [];
    let packages = [];

    const LS_PREFIX_DAY = "ALIZENPILATES_DIA_";
    const LS_CLIENTS_KEY = "ALIZENPILATES_CLIENTES";
    const LS_PACKAGES_KEY = "ALIZENPILATES_PACKAGES";

    // --- REFERENCIAS A ELEMENTOS DEL DOM ---
    // (Todas las referencias que ya teníamos)
    const scheduleView = document.getElementById('schedule-view');
    const clientManagementView = document.getElementById('client-management-view');
    const backToScheduleButton = document.getElementById('back-to-schedule-button');
    const currentDateDisplay = document.getElementById('current-date-display');
    const prevDayButton = document.getElementById('prev-day');
    const nextDayButton = document.getElementById('next-day');
    const datePicker = document.getElementById('date-picker');
    const scheduleContainer = document.getElementById('schedule-container');
    const showSummaryButton = document.getElementById('show-summary-button');

    const manageClientsButton = document.getElementById('manage-clients-button');
    const managePackagesButton = document.getElementById('manage-packages-button');
    const packagesModal = document.getElementById('packages-modal');
    const closePackagesModalButton = document.getElementById('close-packages-modal-button');
    const packageNameInput = document.getElementById('package-name-input');
    const packageClassesInput = document.getElementById('package-classes-input');
    const packagePriceInput = document.getElementById('package-price-input');
    const addPackageButton = document.getElementById('add-package-button');
    const packagesTableBody = document.querySelector('#packages-table tbody');


    const manageClientsButton = document.getElementById('manage-clients-button');
    const managePackagesButton = document.getElementById('manage-packages-button');
    const exportDataButton = document.getElementById('export-data-button');
    const bookingModal = document.getElementById('booking-modal');

    const manageClientsButton = document.getElementById('manage-clients-button');
    const managePackagesButton = document.getElementById('manage-packages-button');
    const packagesModal = document.getElementById('packages-modal');
    const closePackagesModalButton = document.getElementById('close-packages-modal-button');
    const packageNameInput = document.getElementById('package-name-input');
    const packageClassesInput = document.getElementById('package-classes-input');
    const packagePriceInput = document.getElementById('package-price-input');
    const addPackageButton = document.getElementById('add-package-button');
    const packagesTableBody = document.querySelector('#packages-table tbody');

    let editingPackageId = null;


    const exportDataButton = document.getElementById('export-data-button');
    const bookingModal = document.getElementById('booking-modal'); 

    const closeBookingModalButton = document.getElementById('close-booking-modal-button');
    const modalTitle = document.getElementById('modal-title');
    const modalInfo = document.getElementById('modal-info');
    const modalHourTeacherInput = document.getElementById('modal-hour-teacher-input');
    const modalTeacherHourRef = document.getElementById('modal-teacher-hour-ref');
    const modalSelectClient = document.getElementById('modal-select-client'); 
    const quickAddClientBtnFromBooking = document.getElementById('quick-add-client-button-from-booking'); 
    const modalClientPackageInfo = document.getElementById('modal-client-package-info'); 
    const saveBookingButton = document.getElementById('save-booking-button');
    const deleteBookingButton = document.getElementById('delete-booking-button');
    const generateReminderButton = document.getElementById('generate-reminder-button');
    const repeatWeeklyButton = document.getElementById('repeat-weekly-button');
    const newClientNameInput = document.getElementById('new-client-name');
    const newClientPhoneInput = document.getElementById('new-client-phone'); 
    const newClientEmailInput = document.getElementById('new-client-email'); 
    const newClientPackageSelect = document.getElementById('new-client-package');
    const newClientPurchaseDateInput = document.getElementById('new-client-purchase-date');
    const saveNewClientButton = document.getElementById('save-new-client-button');
    const searchClientInput = document.getElementById('search-client-input');
    const clientsListTbody = document.getElementById('clients-list-tbody'); 
    const editClientModal = document.getElementById('edit-client-modal'); 
    const closeEditClientModalButton = document.getElementById('close-edit-client-modal-button');
    const editClientIdInput = document.getElementById('edit-client-id');
    const editClientVisibleIdDisplay = document.getElementById('edit-client-visible-id-display');
    const editClientNameInput = document.getElementById('edit-client-name');
    const editClientPhoneInput = document.getElementById('edit-client-phone'); 
    const editClientEmailInput = document.getElementById('edit-client-email'); 
    const editClientCurrentPackageInfo = document.getElementById('edit-client-current-package-info');
    const editClientNewPackageSelect = document.getElementById('edit-client-new-package');
    const editClientNewPackagePurchaseDateInput = document.getElementById('edit-client-new-package-purchase-date');
    const editClientPaymentMethodInput = document.getElementById('edit-client-payment-method');
    const editClientPaymentReferenceInput = document.getElementById('edit-client-payment-reference');
    const updateClientPackageButton = document.getElementById('update-client-package-button');
    const viewBookedClassesModal = document.getElementById('view-booked-classes-modal');
    const closeViewBookedClassesModalButton = document.getElementById('close-view-booked-classes-modal-button');
    const viewBookedClientName = document.getElementById('view-booked-client-name');
    const bookedClassesListContainer = document.getElementById('booked-classes-list-container');
    const summaryTextModal = document.getElementById('summary-text-modal');
    const closeSummaryModalButton = document.getElementById('close-summary-modal-button');
    const summaryModalTitle = document.getElementById('summary-modal-title');
    const whatsappSummaryTextElement = document.getElementById('whatsapp-summary-text');
    const copySummaryButton = document.getElementById('copy-summary-button');
    const quickHelpButton = document.getElementById('quick-help-button'); 
    const quickHelpModal = document.getElementById('quick-help-modal');
    const closeQuickHelpModalButton = document.getElementById('close-quick-help-modal-button');
    const slotStatusConfigModal = document.getElementById('slot-status-config-modal'); 
    const closeSlotStatusConfigModalButton = document.getElementById('close-slot-status-config-modal-button');
    const slotStatusConfigTimeDisplay = document.getElementById('slot-status-config-time-display');
    const slotStatusEffectiveTeacher = document.getElementById('slot-status-effective-teacher');
    const toggleSlotActiveStatusButton = document.getElementById('toggle-slot-active-status-button');
    const slotActiveStatusTextDisplay = document.getElementById('slot-active-status-text-display');
    const saveSlotStatusConfigButton = document.getElementById('save-slot-status-config-button');
    const feedbackOverlay = document.getElementById('feedback-overlay'); 
    const feedbackMessageBox = document.getElementById('feedback-message-box');
    const feedbackMessage = document.getElementById('feedback-message');
    const reminderTextModal = document.getElementById('reminder-text-modal'); 
    const closeReminderTextModalButton = document.getElementById('close-reminder-text-modal-button');
    const reminderModalTitle = document.getElementById('reminder-modal-title');
    const reminderTextContentElement = document.getElementById('reminder-text-content');
    const copyReminderMessageButton = document.getElementById('copy-reminder-message-button');
    const weeklyRepeatModal = document.getElementById('weekly-repeat-modal'); 
    const closeWeeklyRepeatModalButton = document.getElementById('close-weekly-repeat-modal-button');
    const repeatClientName = document.getElementById('repeat-client-name');
    const repeatClassDetails = document.getElementById('repeat-class-details');
    const repeatClientClassesRemaining = document.getElementById('repeat-client-classes-remaining');
    const repeatWeeksInput = document.getElementById('repeat-weeks-input');
    const repeatMaxWeeksSuggestion = document.getElementById('repeat-max-weeks-suggestion');
    const confirmRepeatWeeklyButton = document.getElementById('confirm-repeat-weekly-button');
    const weeklyRepeatSummaryReport = document.getElementById('weekly-repeat-summary-report');
    const exportDataModal = document.getElementById('export-data-modal');
    const closeExportDataModalButton = document.getElementById('close-export-data-modal-button');
    const exportClientsReadableButton = document.getElementById('export-clients-readable-button');
    const exportClientsJsonButton = document.getElementById('export-clients-json-button');
    const exportAgendaPeriodSelect = document.getElementById('export-agenda-period-select');
    const exportAgendaReadableButton = document.getElementById('export-agenda-readable-button'); 
    const exportAgendaJsonButton = document.getElementById('export-agenda-json-button'); 
    const exportedDataTextarea = document.getElementById('exported-data-textarea');
    const copyExportedDataButton = document.getElementById('copy-exported-data-button');
    const packagesModal = document.getElementById('packages-modal');
    const closePackagesModalButton = document.getElementById('close-packages-modal-button');
    const packagesTableBody = document.querySelector('#packages-table tbody');
    const packageNameInput = document.getElementById('package-name-input');
    const packageClassesInput = document.getElementById('package-classes-input');
    const packagePriceInput = document.getElementById('package-price-input');
    const addPackageButton = document.getElementById('add-package-button');

    let currentEditingSlotData = null; 
    let currentConfiguringHourForStatus = null; 
    let baseBookingDetailsForRepeat = null;
    let currentEditingClientIdForModal = null;

    // --- FUNCIONES DE UTILIDAD ---
    function formatDate(date) { return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`; }
    function formatHourForSlotKey(hour) { return String(hour).padStart(2, '0') + ":00"; }
    function formatTimeForDisplay(hour) { const ampm = hour >= 12 && hour < 24 ? 'PM' : 'AM'; let h = hour % 12; if (h === 0) h = 12; return `${h}:00 ${ampm}`; }
    function getDisplayableDate(date, options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) { return date.toLocaleDateString('es-ES', options); }
    function updateDateDisplay() { currentDateDisplay.textContent = getDisplayableDate(currentDate); datePicker.value = formatDate(currentDate); }
    function showFeedbackMessage(messageText, type = 'info', duration = 2500) { feedbackMessage.textContent = messageText; feedbackMessageBox.className = ''; feedbackMessageBox.classList.add(type); feedbackOverlay.classList.add('show'); setTimeout(() => { feedbackOverlay.classList.remove('show'); }, duration); }
    function generateClientId() { return 'client_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9); }

    function generateNextVisibleClientId() { let nextId = 101; if (clients.length > 0) { const existingIds = clients.map(c => c.numeroClienteVisible || 0).filter(id => id > 0); if (existingIds.length > 0) { const maxId = Math.max(...existingIds); if (maxId >= nextId) nextId = maxId + 1; } } return nextId; }

    function populatePackageDropdown(selectElement, addDefaultOption = true) { if (!packages) { console.error("packages no está definido."); return; } selectElement.innerHTML = addDefaultOption ? '<option value="">-- Seleccionar Paquete --</option>' : ''; packages.forEach(pkg => { const option = document.createElement('option'); option.value = pkg.id; option.textContent = `${pkg.nombre} (${pkg.clases} clase${pkg.clases > 1 ? 's' : ''})`; selectElement.appendChild(option); }); }


    function loadPackages() {
        const data = localStorage.getItem(LS_PACKAGES_KEY);
        if (data) {
            packages = JSON.parse(data);
        } else {
            packages = [...PREDEFINED_PACKAGES];
            savePackages();
        }
    }

    function savePackages() {
        try { localStorage.setItem(LS_PACKAGES_KEY, JSON.stringify(packages)); }
        catch (e) { console.error('Error al guardar paquetes', e); }
    }

    function populatePackageDropdown(selectElement, addDefaultOption = true) {
        if (!packages) return;
        selectElement.innerHTML = addDefaultOption ? '<option value="">-- Seleccionar Paquete --</option>' : '';
        packages.forEach(pkg => {
            const option = document.createElement('option');
            option.value = pkg.id;
            option.textContent = `${pkg.nombre} (${pkg.clases} clase${pkg.clases > 1 ? 's' : ''})`;
            selectElement.appendChild(option);
        });
    }

    function generateNextVisibleClientId() { let nextId = 101; if (clients.length > 0) { const existingIds = clients.map(c => c.numeroClienteVisible || 0).filter(id => id > 0); if (existingIds.length > 0) { const maxId = Math.max(...existingIds); if (maxId >= nextId) nextId = maxId + 1; } } return nextId; }
    function populatePackageDropdown(selectElement, addDefaultOption = true) { if (!packages) { console.error("packages no está definido."); return; } selectElement.innerHTML = addDefaultOption ? '<option value="">-- Seleccionar Paquete --</option>' : ''; packages.forEach(pkg => { const option = document.createElement('option'); option.value = pkg.id; option.textContent = `${pkg.nombre} (${pkg.clases} clase${pkg.clases > 1 ? 's' : ''})`; selectElement.appendChild(option); }); }


    
    // --- MANEJO DE DATOS DEL DÍA (LocalStorage) ---
    function getDayData(dateKey) { const dataString = localStorage.getItem(LS_PREFIX_DAY + dateKey); let data = { slotTeachers: {}, activeSlots: {}, bookings: {} }; if (dataString) { try { const parsedData = JSON.parse(dataString); data.slotTeachers = parsedData.slotTeachers || {}; data.activeSlots = parsedData.activeSlots || {}; data.bookings = parsedData.bookings || {}; } catch (e) { console.error("Error al parsear datos del día:", dateKey, e); } } allTimeSlots.forEach(hour => { const hourKey = formatHourForSlotKey(hour); if (typeof data.activeSlots[hourKey] === 'undefined') data.activeSlots[hourKey] = true; if (typeof data.slotTeachers[hourKey] === 'undefined') data.slotTeachers[hourKey] = ""; }); return data; }
    function saveDayData(dateKey, data) { try { localStorage.setItem(LS_PREFIX_DAY + dateKey, JSON.stringify(data)); } catch (e) { console.error("Error al guardar datos del día:", e); showFeedbackMessage("⚠️ Error al guardar datos del día.", "error"); } }
    

    // --- MANEJO DE PAQUETES (LocalStorage) ---
    function loadPackages() {
        const stored = localStorage.getItem(LS_PACKAGES_KEY);
        packages = stored ? JSON.parse(stored) : DEFAULT_PACKAGES.slice();
    }
    function savePackages() {
        try { localStorage.setItem(LS_PACKAGES_KEY, JSON.stringify(packages)); } catch (e) { console.error("Error al guardar paquetes:", e); }
    }

    // --- MANEJO DE DATOS DE CLIENTES (LocalStorage) ---

    // --- MANEJO DE PAQUETES (LocalStorage) ---
    function loadPackages() {
        const stored = localStorage.getItem(LS_PACKAGES_KEY);
        packages = stored ? JSON.parse(stored) : DEFAULT_PACKAGES.slice();
    }
    function savePackages() {
        try { localStorage.setItem(LS_PACKAGES_KEY, JSON.stringify(packages)); } catch (e) { console.error("Error al guardar paquetes:", e); }
    }

    // --- MANEJO DE DATOS DE CLIENTES (LocalStorage) ---

    function loadClients() { const clientsDataString = localStorage.getItem(LS_CLIENTS_KEY); clients = clientsDataString ? JSON.parse(clientsDataString) : []; let maxCurrentId = 100; let migrationNeeded = false; clients.forEach(client => { if (client.numeroClienteVisible && typeof client.numeroClienteVisible === 'number' && client.numeroClienteVisible > maxCurrentId) { maxCurrentId = client.numeroClienteVisible; } if (!client.paqueteActivo) { client.paqueteActivo = { idPaquete: '', nombrePaquete: 'N/A', clasesCompradas: 0, clasesRestantes: 0, fechaDeCompra: formatDate(new Date()), metodoPago: '', referenciaPago: '' }; migrationNeeded = true; } else { if (typeof client.paqueteActivo.metodoPago === 'undefined') client.paqueteActivo.metodoPago = ''; if (typeof client.paqueteActivo.referenciaPago === 'undefined') client.paqueteActivo.referenciaPago = ''; } if (typeof client.telefono === 'undefined') client.telefono = ''; if (typeof client.correo === 'undefined') client.correo = ''; }); clients.forEach(client => { if (!client.numeroClienteVisible) { maxCurrentId++; client.numeroClienteVisible = maxCurrentId; migrationNeeded = true; } }); if (migrationNeeded) saveClients(); }
    function saveClients() { try { localStorage.setItem(LS_CLIENTS_KEY, JSON.stringify(clients)); } catch (e) { console.error("Error al guardar clientes:", e); showFeedbackMessage("⚠️ Error al guardar datos de clientes.", "error"); } }
    function getClientById(clientId) { return clients.find(c => c.idUnicoCliente === clientId); }
    function deductClassFromClient(clientId) { const clientIndex = clients.findIndex(c => c.idUnicoCliente === clientId); if (clientIndex > -1 && clients[clientIndex].paqueteActivo && clients[clientIndex].paqueteActivo.clasesRestantes > 0) { clients[clientIndex].paqueteActivo.clasesRestantes--; return true; } return false; }
    function refundClassToClient(clientId) { const clientIndex = clients.findIndex(c => c.idUnicoCliente === clientId); if (clientIndex > -1 && clients[clientIndex].paqueteActivo) { clients[clientIndex].paqueteActivo.clasesRestantes++; return true; } return false; }
    function getEffectiveTeacherForSlot(hourKey, dayData) { const slotSpecificTeacher = dayData.slotTeachers[hourKey]; if (slotSpecificTeacher && slotSpecificTeacher.trim() !== "") return slotSpecificTeacher; return ""; }

    function renderPackagesTable() {
        packagesTableBody.innerHTML = '';
        packages.forEach(pkg => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${pkg.nombre}</td><td>${pkg.clases}</td><td>${pkg.precio}</td><td class="actions"><button data-id="${pkg.id}" class="delete-package-button">🗑️</button></td>`;
            packagesTableBody.appendChild(tr);
        });
        packagesTableBody.querySelectorAll('button.delete-package-button').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                packages = packages.filter(p => p.id !== id);
                savePackages();
                renderPackagesTable();
                populatePackageDropdown(newClientPackageSelect);
                populatePackageDropdown(editClientNewPackageSelect, false);
            });
        });
    }

    function openPackagesModal() {
        renderPackagesTable();
        packageNameInput.value = '';
        packageClassesInput.value = '';
        packagePriceInput.value = '';
        packagesModal.style.display = 'flex';
    }

    function closePackagesModal() { packagesModal.style.display = 'none'; }

    function addPackageHandler() {
        const name = packageNameInput.value.trim();
        const classes = parseInt(packageClassesInput.value);
        const price = parseFloat(packagePriceInput.value);
        if (!name || isNaN(classes) || isNaN(price)) { showFeedbackMessage('⚠️ Datos de paquete inválidos.', 'warning'); return; }
        packages.push({ id: 'pkg_' + Date.now(), nombre: name, clases: classes, precio: price });
        savePackages();
        renderPackagesTable();
        populatePackageDropdown(newClientPackageSelect);
        populatePackageDropdown(editClientNewPackageSelect, false);
        packageNameInput.value = '';
        packageClassesInput.value = '';
        packagePriceInput.value = '';
        showFeedbackMessage('Paquete agregado.', 'success');
    }
    
    function showScheduleView() { scheduleView.style.display = 'block'; clientManagementView.style.display = 'none'; renderSchedule();  }
    function showClientManagementView() { scheduleView.style.display = 'none'; clientManagementView.style.display = 'flex'; populatePackageDropdown(newClientPackageSelect); newClientPurchaseDateInput.value = formatDate(new Date()); renderClientsList(); newClientNameInput.value = ""; newClientPhoneInput.value = ""; newClientEmailInput.value = ""; searchClientInput.value = ""; newClientNameInput.focus(); }

    async function getFutureBookingsDetailsForClient(clientId) { // Modificada para devolver también dateKey y hourKey
        const bookingsDetails = [];
        const today = new Date(); today.setHours(0,0,0,0); 
        const dateKeys = [];
        for(let i=0; i < localStorage.length; i++) { const key = localStorage.key(i); if (key && key.startsWith(LS_PREFIX_DAY)) dateKeys.push(key.substring(LS_PREFIX_DAY.length)); }
        dateKeys.sort();

        for (const dateKey of dateKeys) {
            if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) continue;
            const parts = dateKey.split('-'); const itemDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2])); 
            itemDate.setHours(0,0,0,0);
            if (itemDate >= today) { 
                const dayData = getDayData(dateKey); 
                if (dayData && dayData.bookings) {
                    for (const slotId in dayData.bookings) {
                        if (dayData.bookings[slotId] === clientId) {
                            const hour = parseInt(slotId.split('-')[1].substring(0,2));
                            const hourKey = formatHourForSlotKey(hour); // Obtener hourKey
                            if (dateKey === formatDate(new Date()) && hour < (new Date()).getHours()) continue; 
                            
                            const bedNumber = slotId.match(/bed(\d+)/)[1];
                            const teacher = getEffectiveTeacherForSlot(hourKey, dayData);
                            bookingsDetails.push({
                                dateKey: dateKey, // Añadido para filtro
                                hourKey: hourKey, // Añadido para filtro
                                displayDate: getDisplayableDate(itemDate, {weekday:'short', day:'numeric', month:'short'}), // Formato más corto para lista
                                displayTime: formatTimeForDisplay(hour),
                                teacher: teacher || 'N/A',
                                bed: `Cama ${bedNumber}`
                            });
                        }
                    }
                }
            }
        }
        // Ordenar por fecha y luego por hora (numérica)
        bookingsDetails.sort((a, b) => {
            const dateA = new Date(a.dateKey.replace(/-/g, '/')); // YYYY/MM/DD para parseo consistente
            const dateB = new Date(b.dateKey.replace(/-/g, '/'));
            if (dateA - dateB !== 0) return dateA - dateB;
            const hourA = parseInt(a.hourKey.substring(0,2));
            const hourB = parseInt(b.hourKey.substring(0,2));
            return hourA - hourB;
        });
        return bookingsDetails;
    }

    async function renderClientsList(searchTerm = "") { /* ... */ clientsListTbody.innerHTML = '<tr><td colspan="9" style="text-align:center;">Cargando clientes...</td></tr>'; try { const filteredClients = clients.filter(client => client.nombreCliente.toLowerCase().includes(searchTerm.toLowerCase()) || (client.numeroClienteVisible && client.numeroClienteVisible.toString().includes(searchTerm))); if (filteredClients.length === 0) { clientsListTbody.innerHTML = '<tr><td colspan="9" style="text-align:center;">No hay clientes que coincidan.</td></tr>'; return; } const sortedClients = filteredClients.sort((a,b) => (a.numeroClienteVisible || Infinity) - (b.numeroClienteVisible || Infinity) || a.nombreCliente.localeCompare(b.nombreCliente)); let rowsHtml = ""; for (const client of sortedClients) { let futureClassesCount = 0; try { futureClassesCount = await countFutureBookedClasses(client.idUnicoCliente); } catch (countError) { console.error(`Error al contar clases futuras para ${client.nombreCliente}:`, countError); } let rowClass = ''; if (client.paqueteActivo.clasesRestantes <= 0) rowClass = 'no-classes'; else rowClass = 'has-classes'; rowsHtml += `<tr class="client-list-item ${rowClass}" data-clientid="${client.idUnicoCliente}"><td data-label="Nº">${client.numeroClienteVisible || 'S/N'}</td><td data-label="Nombre">${client.nombreCliente}</td><td data-label="Teléfono">${client.telefono || '-'}</td><td data-label="Correo">${client.correo || '-'}</td><td data-label="Paquete">${client.paqueteActivo.nombrePaquete}</td><td data-label="Clases Disp." class="classes-remaining-cell ${rowClass}"><strong class="classes-remaining-value">${client.paqueteActivo.clasesRestantes}</strong></td><td data-label="Clases Agend.">${futureClassesCount}</td><td data-label="Últ. Compra">${getDisplayableDate(new Date(client.paqueteActivo.fechaDeCompra), {day:'numeric', month:'short', year:'numeric'})}</td><td data-label="Acciones" class="client-actions"><button class="edit-client-btn action-button" title="Editar/Recargar ${client.nombreCliente}">✏️</button><button class="view-bookings-btn action-button info-action" title="Ver clases agendadas de ${client.nombreCliente}">👁️</button><button class="delete-client-btn action-button" title="Eliminar ${client.nombreCliente}">🗑️</button></td></tr>`; } clientsListTbody.innerHTML = rowsHtml; clientsListTbody.querySelectorAll('.edit-client-btn').forEach(btn => btn.addEventListener('click', (e) => openEditClientModal(e.currentTarget.closest('tr').dataset.clientid))); clientsListTbody.querySelectorAll('.delete-client-btn').forEach(btn => btn.addEventListener('click', (e) => handleDeleteClient(e.currentTarget.closest('tr').dataset.clientid))); clientsListTbody.querySelectorAll('.view-bookings-btn').forEach(btn => btn.addEventListener('click', (e) => openViewBookedClassesModal(e.currentTarget.closest('tr').dataset.clientid))); } catch (error) { console.error("Error renderizando lista de clientes:", error); clientsListTbody.innerHTML = '<tr><td colspan="9" style="text-align:center; color: red;">Error al cargar la lista de clientes.</td></tr>'; } }
    
    function renderSchedule() { /* ... Misma lógica de renderSchedule ... */  scheduleContainer.innerHTML = ''; const dateKey = formatDate(currentDate); const dayData = getDayData(dateKey); const bookings = dayData.bookings; const activeSlots = dayData.activeSlots; const actualSystemDate = new Date(); const currentSystemHour = actualSystemDate.getHours(); const isViewingToday = (formatDate(currentDate) === formatDate(actualSystemDate)); const timeHeader = document.createElement('div'); timeHeader.className = 'grid-header time-slot-header'; timeHeader.textContent = 'Hora'; scheduleContainer.appendChild(timeHeader); for (let i = 1; i <= bedCount; i++) { const bedH = document.createElement('div'); bedH.className = 'grid-header bed-header'; bedH.textContent = `Cama ${i}`; scheduleContainer.appendChild(bedH); } allTimeSlots.forEach(hour => { const hourKey = formatHourForSlotKey(hour); const isSlotActive = activeSlots[hourKey]; const timeLabel = document.createElement('div'); timeLabel.className = 'time-slot-label'; timeLabel.textContent = formatTimeForDisplay(hour); if (!isSlotActive) timeLabel.classList.add('inactive'); timeLabel.title = `Clic para Activar/Desactivar el horario de las ${formatTimeForDisplay(hour)}`; timeLabel.addEventListener('click', () => openSlotStatusConfigModal(hour)); scheduleContainer.appendChild(timeLabel); for (let bed = 1; bed <= bedCount; bed++) { const slot = document.createElement('div'); const slotId = `bed${bed}-${hourKey}`; slot.classList.add('slot'); slot.dataset.bed = bed; slot.dataset.time = hour; const bookedClientId = bookings[slotId]; const effectiveTeacherName = getEffectiveTeacherForSlot(hourKey, dayData); slot.innerHTML = '';  if (bookedClientId) { const client = getClientById(bookedClientId); const clientNameForDisplay = client ? client.nombreCliente : "Cliente Desconocido"; slot.classList.add('occupied'); const clientSpan = document.createElement('span'); clientSpan.className = 'client-name-display'; clientSpan.textContent = clientNameForDisplay; slot.appendChild(clientSpan); if (effectiveTeacherName) { const teacherSpan = document.createElement('span'); teacherSpan.className = 'teacher-in-slot-display'; teacherSpan.textContent = `(Prof: ${effectiveTeacherName})`; slot.appendChild(teacherSpan); } } else if (effectiveTeacherName && isSlotActive) { slot.classList.remove('occupied'); const teacherSpan = document.createElement('span'); teacherSpan.className = 'teacher-in-slot-display'; teacherSpan.textContent = `(Prof: ${effectiveTeacherName})`; slot.appendChild(teacherSpan); } else { slot.classList.remove('occupied'); } if (!isSlotActive) slot.classList.add('inactive-parent-slot'); else {  let isPastSlotForToday = isViewingToday && hour < currentSystemHour; if (isPastSlotForToday) { slot.classList.add('past'); slot.title = "Este horario ya pasó."; slot.onclick = null;  } else {  const client = bookedClientId ? getClientById(bookedClientId) : null; const clientNameStr = client ? client.nombreCliente : ""; slot.title = clientNameStr ? `Ocupado por ${clientNameStr}. Clic para gestionar.` : `Cama libre (Prof. hora: ${effectiveTeacherName || 'ninguno'}). Clic para gestionar.`; slot.addEventListener('click', () => handleSlotClick(bed, hour, hourKey, bookedClientId)); slot.classList.remove('slot-cancellation-critical'); if (bookedClientId && isSlotActive) { const classDateTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hour); const timeDifferenceInMilliseconds = classDateTime.getTime() - actualSystemDate.getTime(); const threeHoursInMilliseconds = 3 * 60 * 60 * 1000; if (timeDifferenceInMilliseconds > 0 && timeDifferenceInMilliseconds <= threeHoursInMilliseconds) { slot.classList.add('slot-cancellation-critical'); slot.title += " (¡Cancelación crítica!)"; } } } }  if (!isSlotActive && slot.onclick) { slot.onclick = null; slot.title = `Horario de las ${formatTimeForDisplay(hour)} desactivado.`;} scheduleContainer.appendChild(slot); } }); }
    
    saveNewClientButton.addEventListener('click', () => { /* ... */ const name = newClientNameInput.value.trim(); const phone = newClientPhoneInput.value.trim(); const email = newClientEmailInput.value.trim(); const packageId = newClientPackageSelect.value; const purchaseDate = newClientPurchaseDateInput.value || formatDate(new Date()); if (!name || !packageId) { showFeedbackMessage("⚠️ Nombre y paquete requeridos.", "warning"); return; } const selectedPackage = packages.find(p => p.id === packageId); if (!selectedPackage) { showFeedbackMessage("⚠️ Paquete no válido.", "error"); return; } const newClient = { idUnicoCliente: generateClientId(), numeroClienteVisible: generateNextVisibleClientId(), nombreCliente: name, telefono: phone, correo: email, paqueteActivo: { idPaquete: packageId, nombrePaquete: selectedPackage.nombre, clasesCompradas: selectedPackage.clases, clasesRestantes: selectedPackage.clases, fechaDeCompra: purchaseDate, metodoPago: '', referenciaPago: '' } }; clients.push(newClient); saveClients(); showFeedbackMessage(`✔️ Cliente "${name}" (Nº ${newClient.numeroClienteVisible}) agregado.`, "success"); newClientNameInput.value = ''; newClientPhoneInput.value = ''; newClientEmailInput.value = ''; newClientPackageSelect.value = ''; newClientPurchaseDateInput.value = formatDate(new Date()); renderClientsList(); populateClientSelectorInBookingModal(); });
    searchClientInput.addEventListener('input', function() { renderClientsList(this.value); });
    function handleDeleteClient(clientId) { /* ... */ const client = getClientById(clientId); if (!client) { showFeedbackMessage("⚠️ Cliente no encontrado.", "error"); return; } if (confirm(`¿ELIMINAR a ${client.nombreCliente} (Nº ${client.numeroClienteVisible})?\n\nPERMANENTE. Reservas en agenda actual mostrarán "Cliente Desconocido".`)) { clients = clients.filter(c => c.idUnicoCliente !== clientId); saveClients(); const dateKey = formatDate(currentDate); const dayData = getDayData(dateKey); let bookingsUpdated = false; for (const slotId in dayData.bookings) { if (dayData.bookings[slotId] === clientId) { delete dayData.bookings[slotId]; bookingsUpdated = true; } } if (bookingsUpdated) saveDayData(dateKey, dayData); renderClientsList(); populateClientSelectorInBookingModal(); renderSchedule(); showFeedbackMessage(`🗑️ Cliente "${client.nombreCliente}" eliminado.`, "info"); } }
    function openEditClientModal(clientId) { /* ... */ currentEditingClientIdForModal = clientId; const client = getClientById(clientId); if (!client) { showFeedbackMessage("⚠️ Error: Cliente no encontrado.", "error"); return; } editClientIdInput.value = client.idUnicoCliente; editClientVisibleIdDisplay.textContent = client.numeroClienteVisible || 'S/N'; editClientNameInput.value = client.nombreCliente; editClientPhoneInput.value = client.telefono || ""; editClientEmailInput.value = client.correo || "";  editClientCurrentPackageInfo.innerHTML = `Paquete: <strong>${client.paqueteActivo.nombrePaquete}</strong><br>Clases Restantes: <strong>${client.paqueteActivo.clasesRestantes}</strong><br>Comprado: ${getDisplayableDate(new Date(client.paqueteActivo.fechaDeCompra), {day:'numeric',month:'short',year:'numeric'})}<br>Pago: ${client.paqueteActivo.metodoPago || 'N/A'} (Ref: ${client.paqueteActivo.referenciaPago || 'N/A'})`; if(client.paqueteActivo.clasesRestantes <=0) editClientCurrentPackageInfo.classList.add('warning'); else editClientCurrentPackageInfo.classList.remove('warning'); populatePackageDropdown(editClientNewPackageSelect, false); editClientNewPackageSelect.insertAdjacentHTML('afterbegin', '<option value="">-- No cambiar/agregar paquete --</option>'); editClientNewPackageSelect.value = ""; editClientNewPackagePurchaseDateInput.value = formatDate(new Date()); editClientPaymentMethodInput.value = ""; editClientPaymentReferenceInput.value = ""; editClientModal.style.display = 'flex'; editClientNameInput.focus(); }
    function closeEditClientModal() { editClientModal.style.display = 'none'; currentEditingClientIdForModal = null;}
    function updateClientPackageButtonHandler() { /* ... */ if (!currentEditingClientIdForModal) return; const clientIndex = clients.findIndex(c => c.idUnicoCliente === currentEditingClientIdForModal); if (clientIndex === -1) { showFeedbackMessage("⚠️ Error al actualizar.", "error"); return; } const clientToUpdate = clients[clientIndex]; const updatedName = editClientNameInput.value.trim(); const updatedPhone = editClientPhoneInput.value.trim(); const updatedEmail = editClientEmailInput.value.trim();   if (!updatedName) { showFeedbackMessage("⚠️ El nombre no puede estar vacío.", "warning"); return; } const newPackageId = editClientNewPackageSelect.value; const newPurchaseDate = editClientNewPackagePurchaseDateInput.value || formatDate(new Date()); const newPaymentMethod = editClientPaymentMethodInput.value; const newPaymentReference = editClientPaymentReferenceInput.value.trim(); let feedback = `✔️ Datos de "${updatedName}" actualizados.`; let packageActuallyChanged = false; if (newPackageId) { const selectedPackage = packages.find(p => p.id === newPackageId); if (selectedPackage) { const oldClassesRemaining = clientToUpdate.paqueteActivo.clasesRestantes; const classesFromNewPackage = selectedPackage.clases; const newTotalClassesAfterRecharge = (oldClassesRemaining < 0 ? 0 : oldClassesRemaining) + classesFromNewPackage; if (!confirm(`Vas a agregar el paquete "${selectedPackage.nombre}" (${classesFromNewPackage} clases) a ${updatedName}.\nSus clases restantes pasarán de ${oldClassesRemaining} a ${newTotalClassesAfterRecharge}.\n\nMétodo de Pago: ${newPaymentMethod || "No especificado"}\nReferencia: ${newPaymentReference || "Ninguna"}\n\n¿ESTÁS SEGURA?`)) { return; } clientToUpdate.paqueteActivo = { idPaquete: newPackageId, nombrePaquete: selectedPackage.nombre, clasesCompradas: classesFromNewPackage, clasesRestantes: newTotalClassesAfterRecharge, fechaDeCompra: newPurchaseDate, metodoPago: newPaymentMethod, referenciaPago: newPaymentReference }; feedback = `✔️ Paquete de "${updatedName}" actualizado. Ahora tiene ${newTotalClassesAfterRecharge} clases.`; packageActuallyChanged = true; } else { showFeedbackMessage("⚠️ Nuevo paquete no válido.", "error"); return; } } clientToUpdate.nombreCliente = updatedName; clientToUpdate.telefono = updatedPhone; clientToUpdate.correo = updatedEmail; saveClients(); renderClientsList(); populateClientSelectorInBookingModal(); renderSchedule(); showFeedbackMessage(feedback, (packageActuallyChanged || clientToUpdate.nombreCliente !== updatedName || clientToUpdate.telefono !== updatedPhone || clientToUpdate.correo !== updatedEmail) ? "success" : "info", 3000); closeEditClientModal(); }
    updateClientPackageButton.addEventListener('click', updateClientPackageButtonHandler);

    // --- MODAL VER CLASES AGENDADAS ---
    async function openViewBookedClassesModal(clientId) {
        const client = getClientById(clientId);
        if (!client) { showFeedbackMessage("⚠️ Cliente no encontrado.", "error"); return; }
        viewBookedClientName.textContent = client.nombreCliente;
        bookedClassesListContainer.innerHTML = '<p>Buscando clases agendadas...</p>';
        viewBookedClassesModal.style.display = 'flex';
        const bookingsDetails = await getFutureBookingsDetailsForClient(clientId); 
        if (bookingsDetails.length === 0) { bookedClassesListContainer.innerHTML = '<p class="no-booked-classes">Este cliente no tiene clases futuras agendadas.</p>'; return; }
        let listHTML = '<ul>';
        bookingsDetails.forEach(b => { listHTML += `<li>${b.displayDate} - ${b.displayTime} (Prof: ${b.teacher}) - ${b.bed}</li>`; });
        listHTML += '</ul>';
        bookedClassesListContainer.innerHTML = listHTML;
    }
    function closeViewBookedClassesModal() { viewBookedClassesModal.style.display = 'none'; bookedClassesListContainer.innerHTML = '';}


    function openSlotStatusConfigModal(hour) { /* ... */ currentConfiguringHourForStatus = hour; const dateKey = formatDate(currentDate); const dayData = getDayData(dateKey); const hourKey = formatHourForSlotKey(hour); const isSlotActive = dayData.activeSlots[hourKey]; const effectiveTeacher = getEffectiveTeacherForSlot(hourKey, dayData); slotStatusConfigTimeDisplay.textContent = formatTimeForDisplay(hour); slotStatusEffectiveTeacher.textContent = effectiveTeacher || "Ninguno asignado"; if (isSlotActive) { toggleSlotActiveStatusButton.textContent = "Desactivar este Horario"; toggleSlotActiveStatusButton.style.backgroundColor = "#dc3545"; slotActiveStatusTextDisplay.textContent = "Actualmente: ACTIVO"; slotActiveStatusTextDisplay.style.color = "#28a745"; } else { toggleSlotActiveStatusButton.textContent = "Activar este Horario"; toggleSlotActiveStatusButton.style.backgroundColor = "#28a745"; slotActiveStatusTextDisplay.textContent = "Actualmente: INACTIVO"; slotActiveStatusTextDisplay.style.color = "#dc3545"; } slotStatusConfigModal.style.display = 'flex'; }
    function closeSlotStatusConfigModal() { /* ... */ slotStatusConfigModal.style.display = 'none'; currentConfiguringHourForStatus = null; }
    toggleSlotActiveStatusButton.addEventListener('click', () => { /* ... */ const currentButtonText = toggleSlotActiveStatusButton.textContent; if (currentButtonText === "Desactivar este Horario") { toggleSlotActiveStatusButton.textContent = "Activar este Horario"; toggleSlotActiveStatusButton.style.backgroundColor = "#28a745"; slotActiveStatusTextDisplay.textContent = "Cambiar a: INACTIVO"; slotActiveStatusTextDisplay.style.color = "#dc3545"; } else { toggleSlotActiveStatusButton.textContent = "Desactivar este Horario"; toggleSlotActiveStatusButton.style.backgroundColor = "#dc3545"; slotActiveStatusTextDisplay.textContent = "Cambiar a: ACTIVO"; slotActiveStatusTextDisplay.style.color = "#28a745"; } });
    saveSlotStatusConfigButton.addEventListener('click', () => { /* ... */ if (currentConfiguringHourForStatus === null) return; const dateKey = formatDate(currentDate); const dayData = getDayData(dateKey); const hourKey = formatHourForSlotKey(currentConfiguringHourForStatus); const timeDisplay = formatTimeForDisplay(currentConfiguringHourForStatus); const intendedToBeActive = (slotActiveStatusTextDisplay.textContent.includes("ACTIVO")); const currentlyActive = dayData.activeSlots[hourKey]; let proceedWithStateChange = true; let clientDataModifiedInThisFlow = false; if (currentlyActive && !intendedToBeActive) {  let bookingsInSlotCount = 0; let clientsToRefund = []; for (let bed = 1; bed <= bedCount; bed++) { const bookedClientId = dayData.bookings[`bed${bed}-${hourKey}`]; if (bookedClientId) { bookingsInSlotCount++; clientsToRefund.push(bookedClientId); } } if (bookingsInSlotCount > 0) { proceedWithStateChange = confirm(`El horario de ${timeDisplay} tiene ${bookingsInSlotCount} reserva(s).\n\n¿DESACTIVAR y ELIMINAR reserva(s) (se devolverán las clases)?`); } if (proceedWithStateChange) { dayData.activeSlots[hourKey] = false; clientsToRefund.forEach(clientId => { if(refundClassToClient(clientId)) clientDataModifiedInThisFlow = true; }); for (let bed = 1; bed <= bedCount; bed++) { delete dayData.bookings[`bed${bed}-${hourKey}`]; } if(clientDataModifiedInThisFlow) saveClients(); showFeedbackMessage(`🚫 Horario de ${timeDisplay} DESACTIVADO. Reserva(s) eliminada(s) y clase(s) devuelta(s).`, 'info'); } } else if (!currentlyActive && intendedToBeActive) {  dayData.activeSlots[hourKey] = true; showFeedbackMessage(`✅ Horario de ${timeDisplay} ACTIVADO.`, 'success'); } if (proceedWithStateChange) { saveDayData(dateKey, dayData); renderSchedule(); } closeSlotStatusConfigModal(); });

    function populateClientSelectorInBookingModal() { 
        modalSelectClient.innerHTML = '<option value="">-- Seleccionar Cliente --</option>';
        clients.filter(client => client.paqueteActivo.clasesRestantes > 0) 
               .sort((a,b) => (a.numeroClienteVisible || Infinity) - (b.numeroClienteVisible || Infinity) || a.nombreCliente.localeCompare(b.nombreCliente))
               .forEach(client => {
                    const option = document.createElement('option'); 
                    option.value = client.idUnicoCliente;
                    option.textContent = `#${client.numeroClienteVisible || 'S/N'} - ${client.nombreCliente} (Rest: ${client.paqueteActivo.clasesRestantes})`;
                    modalSelectClient.appendChild(option);
                });
    }
    function displaySelectedClientPackageInfo() { const selectedClientId = modalSelectClient.value; modalClientPackageInfo.style.display = 'none'; modalClientPackageInfo.classList.remove('warning'); if (selectedClientId) { const client = getClientById(selectedClientId); if (client) { modalClientPackageInfo.innerHTML = `Paquete: <strong>${client.paqueteActivo.nombrePaquete}</strong> <br> Clases Restantes: <strong>${client.paqueteActivo.clasesRestantes}</strong>`; if (client.paqueteActivo.clasesRestantes <= 0) modalClientPackageInfo.classList.add('warning'); modalClientPackageInfo.style.display = 'block'; } } }
    modalSelectClient.addEventListener('change', displaySelectedClientPackageInfo);
    
    function handleSlotClick(bed, time, hourKey, bookedClientId) { 
        const dateKey = formatDate(currentDate); const dayData = getDayData(dateKey);
        if (!dayData.activeSlots[hourKey]) { showFeedbackMessage(`El horario de ${formatTimeForDisplay(time)} está desactivado.`, "warning"); return; }
        currentEditingSlotData = { bed, time, hourKey, originalClientId: bookedClientId, originalTeacher: dayData.slotTeachers[hourKey] || "" }; 
        const displayTime = formatTimeForDisplay(time);
        modalInfo.textContent = `Cama ${bed} a las ${displayTime}`;
        modalTeacherHourRef.textContent = displayTime;
        modalHourTeacherInput.value = dayData.slotTeachers[hourKey] || "";
        populateClientSelectorInBookingModal(); 
        modalSelectClient.value = bookedClientId || ""; 
        displaySelectedClientPackageInfo();  
        
        const clientIsBooked = !!bookedClientId; // Convertir a booleano
        generateReminderButton.style.display = clientIsBooked ? 'block' : 'none';
        repeatWeeklyButton.style.display = 'none'; // Se muestra después de guardar
        saveBookingButton.disabled = false;

        if (bookedClientId) { modalTitle.textContent = "Editar Reserva / Maestro de Hora"; deleteBookingButton.style.display = 'inline-block';}
        else { modalTitle.textContent = "Asignar Cama / Maestro de Hora"; deleteBookingButton.style.display = 'none'; }
        saveBookingButton.textContent = "✅ GUARDAR TODO";
        bookingModal.style.display = 'flex';
        if (!bookedClientId) modalSelectClient.focus(); else modalHourTeacherInput.focus();
    }
    function closeBookingModal() { bookingModal.style.display = 'none'; currentEditingSlotData = null; modalClientPackageInfo.style.display = 'none'; generateReminderButton.style.display = 'none'; repeatWeeklyButton.style.display = 'none'; baseBookingDetailsForRepeat = null; saveBookingButton.disabled = false; }

    saveBookingButton.addEventListener('click', () => { 
        if (!currentEditingSlotData) return;
        saveBookingButton.disabled = true; 

        const { bed, time, hourKey, originalClientId } = currentEditingSlotData;
        const dateKey = formatDate(currentDate); 
        const dayData = getDayData(dateKey);
        const teacherInStorageBeforeThisSave = dayData.slotTeachers[hourKey] || "";
        const newHourTeacher = modalHourTeacherInput.value.trim();
        const selectedClientId = modalSelectClient.value;
        const slotId = `bed${bed}-${hourKey}`;
        let feedbackMessages = []; let clientDataChanged = false; let bookingActuallyHappenedOrChanged = false; 
        let teacherActuallyChangedThisSave = newHourTeacher !== teacherInStorageBeforeThisSave;

        if (teacherActuallyChangedThisSave) {
            dayData.slotTeachers[hourKey] = newHourTeacher; 
            if (newHourTeacher) feedbackMessages.push(`🧑‍🏫 Maestro para ${formatTimeForDisplay(time)}: ${newHourTeacher}.`);
            else if (teacherInStorageBeforeThisSave) feedbackMessages.push(`🧑‍🏫 Maestro de ${formatTimeForDisplay(time)} eliminado.`);
            currentEditingSlotData.originalTeacher = newHourTeacher; 
        }

        if (selectedClientId) {
            const client = getClientById(selectedClientId);
            if (!client) { showFeedbackMessage("⚠️ Error: Cliente seleccionado no encontrado.", "error"); saveBookingButton.disabled = false; if (teacherActuallyChangedThisSave && !originalClientId && !dayData.bookings[slotId]) dayData.slotTeachers[hourKey] = teacherInStorageBeforeThisSave; return; }
            
            if (selectedClientId !== originalClientId) { 
                if (originalClientId) { if(refundClassToClient(originalClientId)) clientDataChanged = true; }
                if (client.paqueteActivo.clasesRestantes <= 0) {
                    showFeedbackMessage(`⛔ ${client.nombreCliente} no tiene clases disponibles (Rest: ${client.paqueteActivo.clasesRestantes}). No se puede agendar. Recargue su paquete.`, "error", 4000);
                    saveBookingButton.disabled = false; 
                    if (teacherActuallyChangedThisSave && !dayData.bookings[slotId]) dayData.slotTeachers[hourKey] = teacherInStorageBeforeThisSave;
                    modalSelectClient.value = originalClientId || ""; 
                    displaySelectedClientPackageInfo(); 
                    return; 
                }
                if(deductClassFromClient(selectedClientId)) { 
                     clientDataChanged = true;
                     dayData.bookings[slotId] = selectedClientId;
                     feedbackMessages.push(`✔️ "${client.nombreCliente}" agendado. (Rest: ${client.paqueteActivo.clasesRestantes})`);
                } else { 
                    showFeedbackMessage(`⚠️ No se pudo descontar clase para ${client.nombreCliente}. Verifique.`, "error", 3500);
                    if (originalClientId) { dayData.bookings[slotId] = originalClientId; } else { delete dayData.bookings[slotId]; }
                    if (teacherActuallyChangedThisSave) dayData.slotTeachers[hourKey] = teacherInStorageBeforeThisSave;
                    saveBookingButton.disabled = false; return;
                }
            }
            bookingActuallyHappenedOrChanged = true;
            currentEditingSlotData.originalClientId = selectedClientId; 
        
        } else if (originalClientId) { 
            if(refundClassToClient(originalClientId)) clientDataChanged = true;
            delete dayData.bookings[slotId];
            const oldClient = getClientById(originalClientId);
            feedbackMessages.push(`🗑️ Cama ${bed} liberada (era de ${oldClient ? oldClient.nombreCliente : ''}). Clase devuelta.`);
            bookingActuallyHappenedOrChanged = true; 
            currentEditingSlotData.originalClientId = null;
        }
        
        saveDayData(dateKey, dayData);
        if (clientDataChanged) saveClients(); 
        
        if (feedbackMessages.length > 0) {
            showFeedbackMessage(feedbackMessages.join(' '), 'success', 2800);
        }
        
        // Actualizar la visibilidad de los botones de acciones secundarias
        const currentBookedClientIdInSlot = dayData.bookings[slotId]; // Leer el estado después de guardar
        if (currentBookedClientIdInSlot) {
            baseBookingDetailsForRepeat = {
                clientId: currentBookedClientIdInSlot, originalDate: new Date(currentDate), time, hourKey,
                teacherName: dayData.slotTeachers[hourKey], 
            };
            repeatWeeklyButton.style.display = 'block';
            generateReminderButton.style.display = 'block';
            saveBookingButton.disabled = false; // Permitir repetir o generar recordatorio
        } else {
             // Si no hay cliente en el slot (o nunca lo hubo y solo se guardó maestro), cerrar el modal.
            if (!selectedClientId || (selectedClientId && !bookingActuallyHappenedOrChanged && feedbackMessages.length == 0)) {
                 closeBookingModal();
            } else { // Si se borró un cliente o solo se cambió el maestro, y hay feedback, dejarlo abierto.
                 saveBookingButton.disabled = false;
                 generateReminderButton.style.display = 'none';
                 repeatWeeklyButton.style.display = 'none';
            }
        }
        renderSchedule(); 
    });

    deleteBookingButton.addEventListener('click', () => { /* ... */ if (!currentEditingSlotData || !currentEditingSlotData.originalClientId) return; const { bed, time, hourKey, originalClientId } = currentEditingSlotData; const client = getClientById(originalClientId); const clientNameForMsg = client ? client.nombreCliente : "Cliente desconocido"; const dateKey = formatDate(currentDate); const dayData = getDayData(dateKey); const classDateTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), time); const now = new Date(); const timeDifferenceInMilliseconds = classDateTime.getTime() - now.getTime(); const threeHoursInMilliseconds = 3 * 60 * 60 * 1000; const isWithinCriticalWindow = timeDifferenceInMilliseconds > 0 && timeDifferenceInMilliseconds <= threeHoursInMilliseconds; let confirmMessage = `¿Seguro que quieres LIBERAR la Cama ${bed} a las ${formatTimeForDisplay(time)} (${clientNameForMsg})?`; if (isWithinCriticalWindow) { confirmMessage = `⚠️ ¡ATENCIÓN! La clase de ${clientNameForMsg} a las ${formatTimeForDisplay(time)} está DENTRO de las 3 horas para cancelación.\n\nComo es una acción administrativa, si liberas la cama, se DEVOLVERÁ 1 clase al cliente.\n\n¿Estás segura que quieres liberarla?`; } else { confirmMessage += `\nSe devolverá 1 clase al cliente.`; } if (confirm(confirmMessage)) { const slotId = `bed${bed}-${hourKey}`; if (dayData.bookings[slotId] === originalClientId) { delete dayData.bookings[slotId]; let clientDataChanged = false; if(refundClassToClient(originalClientId)) clientDataChanged = true;  saveDayData(dateKey, dayData); if (clientDataChanged) saveClients(); renderSchedule(); showFeedbackMessage(`👍 Cama ${bed} liberada. Clase devuelta a ${clientNameForMsg}.`, 'success'); } closeBookingModal(); } });
    
    prevDayButton.addEventListener('click', () => { currentDate.setDate(currentDate.getDate() - 1); updateDateDisplay(); renderSchedule(); });
    nextDayButton.addEventListener('click', () => { currentDate.setDate(currentDate.getDate() + 1); updateDateDisplay(); renderSchedule(); });
    datePicker.addEventListener('input', (e) => { if (!e.target.value) return; const parts = e.target.value.split('-'); currentDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2])); if (isNaN(currentDate.getTime())) { currentDate = new Date(); } updateDateDisplay(); renderSchedule(); });

    function openWeeklyRepeatModal() { /* ... */ if (!baseBookingDetailsForRepeat || !baseBookingDetailsForRepeat.clientId) { showFeedbackMessage("⚠️ Completa la reserva actual primero.", "warning"); return; } const client = getClientById(baseBookingDetailsForRepeat.clientId); if (!client) { showFeedbackMessage("⚠️ Cliente no encontrado.", "error"); return; } repeatClientName.textContent = client.nombreCliente; const baseDateForDisplay = new Date(baseBookingDetailsForRepeat.originalDate); repeatClassDetails.textContent = `${getDisplayableDate(baseDateForDisplay, {weekday:'long'})} a las ${formatTimeForDisplay(baseBookingDetailsForRepeat.time)} con ${baseBookingDetailsForRepeat.teacherName || 'N/A'}`; repeatClientClassesRemaining.textContent = client.paqueteActivo.clasesRestantes; const maxSuggest = client.paqueteActivo.clasesRestantes; repeatMaxWeeksSuggestion.textContent = Math.max(0, maxSuggest); repeatWeeksInput.value = 1; repeatWeeksInput.min = 0; repeatWeeksInput.max = Math.max(0, maxSuggest); weeklyRepeatSummaryReport.innerHTML = ''; confirmRepeatWeeklyButton.disabled = false; weeklyRepeatModal.style.display = 'flex'; }

    function closeWeeklyRepeatModal() { /* ... */ weeklyRepeatModal.style.display = 'none'; }
    repeatWeeklyButton.addEventListener('click', openWeeklyRepeatModal);
    closeWeeklyRepeatModalButton.addEventListener('click', closeWeeklyRepeatModal);

    function renderPackagesTable() {
        packagesTableBody.innerHTML = '';
        packages.forEach(pkg => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${pkg.nombre}</td><td>${pkg.clases}</td><td>${pkg.precio}</td><td><button data-id="${pkg.id}" class="delete-package-btn">🗑️</button></td>`;
            packagesTableBody.appendChild(row);
        });
    }
    function openPackagesModal() { packageNameInput.value = ''; packageClassesInput.value = ''; packagePriceInput.value = ''; renderPackagesTable(); packagesModal.style.display = 'flex'; }
    function closePackagesModal() { packagesModal.style.display = 'none'; }
    function addPackageFromForm() {
        const name = packageNameInput.value.trim();
        const classes = parseInt(packageClassesInput.value, 10);
        const price = parseInt(packagePriceInput.value, 10);
        if (!name || isNaN(classes) || isNaN(price)) { showFeedbackMessage('⚠️ Completa todos los campos', 'warning'); return; }
        packages.push({ id: 'pkg_' + Date.now(), nombre: name, clases: classes, precio: price });
        savePackages();
        populatePackageDropdown(newClientPackageSelect);
        populatePackageDropdown(editClientNewPackageSelect, false);
        renderPackagesTable();
        packageNameInput.value = '';
        packageClassesInput.value = '';
        packagePriceInput.value = '';
    }
    function handleDeletePackageClick(e) {
        if (e.target.classList.contains('delete-package-btn')) {
            const pkgId = e.target.getAttribute('data-id');
            packages = packages.filter(p => p.id !== pkgId);
            savePackages();
            populatePackageDropdown(newClientPackageSelect);
            populatePackageDropdown(editClientNewPackageSelect, false);
            renderPackagesTable();
        }
    }

    function closeWeeklyRepeatModal() { /* ... */ weeklyRepeatModal.style.display = 'none'; }
    repeatWeeklyButton.addEventListener('click', openWeeklyRepeatModal);
    closeWeeklyRepeatModalButton.addEventListener('click', closeWeeklyRepeatModal);

    function renderPackagesTable() {
        packagesTableBody.innerHTML = '';
        packages.forEach(pkg => {
            const row = document.createElement('tr');

            row.innerHTML = `<td>${pkg.nombre}</td><td>${pkg.clases}</td><td>${pkg.precio}</td><td><button data-id="${pkg.id}" class="edit-package-btn">✏️</button> <button data-id="${pkg.id}" class="delete-package-btn">🗑️</button></td>`;
            packagesTableBody.appendChild(row);
        });
    }
    function openPackagesModal() {
        editingPackageId = null;
        addPackageButton.textContent = 'Agregar';
        packageNameInput.value = '';
        packageClassesInput.value = '';
        packagePriceInput.value = '';
        renderPackagesTable();
        packagesModal.style.display = 'flex';
    }

        });
    }
    function openPackagesModal() { packageNameInput.value = ''; packageClassesInput.value = ''; packagePriceInput.value = ''; renderPackagesTable(); packagesModal.style.display = 'flex'; }

    function closePackagesModal() { packagesModal.style.display = 'none'; }
    function addPackageFromForm() {
        const name = packageNameInput.value.trim();
        const classes = parseInt(packageClassesInput.value, 10);
        const price = parseInt(packagePriceInput.value, 10);
        if (!name || isNaN(classes) || isNaN(price)) { showFeedbackMessage('⚠️ Completa todos los campos', 'warning'); return; }

        if (editingPackageId) {
            const pkg = packages.find(p => p.id === editingPackageId);
            if (pkg) { pkg.nombre = name; pkg.clases = classes; pkg.precio = price; }
            editingPackageId = null;
            addPackageButton.textContent = 'Agregar';
        } else {
            packages.push({ id: 'pkg_' + Date.now(), nombre: name, clases: classes, precio: price });
        }

        packages.push({ id: 'pkg_' + Date.now(), nombre: name, clases: classes, precio: price });

        savePackages();
        populatePackageDropdown(newClientPackageSelect);
        populatePackageDropdown(editClientNewPackageSelect, false);
        renderPackagesTable();
        packageNameInput.value = '';
        packageClassesInput.value = '';
        packagePriceInput.value = '';
    }

    function startEditingPackage(pkgId) {
        const pkg = packages.find(p => p.id === pkgId);
        if (pkg) {
            editingPackageId = pkgId;
            packageNameInput.value = pkg.nombre;
            packageClassesInput.value = pkg.clases;
            packagePriceInput.value = pkg.precio;
            addPackageButton.textContent = 'Guardar';
        }
    }
    function handlePackagesTableClick(e) {
        const pkgId = e.target.getAttribute('data-id');
        if (e.target.classList.contains('delete-package-btn')) {

    function handleDeletePackageClick(e) {
        if (e.target.classList.contains('delete-package-btn')) {
            const pkgId = e.target.getAttribute('data-id');

            packages = packages.filter(p => p.id !== pkgId);
            savePackages();
            populatePackageDropdown(newClientPackageSelect);
            populatePackageDropdown(editClientNewPackageSelect, false);
            renderPackagesTable();

        } else if (e.target.classList.contains('edit-package-btn')) {
            startEditingPackage(pkgId);

        }
    }

    confirmRepeatWeeklyButton.addEventListener('click', () => {  /* ... */ if (!baseBookingDetailsForRepeat) return; const numWeeks = parseInt(repeatWeeksInput.value); const { clientId, originalDate, time, hourKey, teacherName } = baseBookingDetailsForRepeat; let client = getClientById(clientId); if (isNaN(numWeeks) || numWeeks < 0) { showFeedbackMessage("⚠️ Ingresa un número válido de semanas.", "warning"); return; } if (numWeeks === 0) { showFeedbackMessage("ℹ️ No se agendaron repeticiones.", "info"); closeWeeklyRepeatModal(); return;} if (client.paqueteActivo.clasesRestantes < 1 && numWeeks > 0) { showFeedbackMessage(`⛔ ${client.nombreCliente} no tiene clases disponibles para repetir.`, "error"); return; } let numWeeksToAttempt = numWeeks; if (client.paqueteActivo.clasesRestantes < numWeeks) { if(!confirm(`El cliente solo tiene ${client.paqueteActivo.clasesRestantes} clases. Se intentarán agendar solo ${client.paqueteActivo.clasesRestantes} semanas. ¿Continuar?`)){ return; } numWeeksToAttempt = client.paqueteActivo.clasesRestantes; } confirmRepeatWeeklyButton.disabled = true; weeklyRepeatSummaryReport.innerHTML = '<p>Procesando...</p>'; let successfullyBookedCount = 0; let failedAttemptsLog = []; let clientDataChangedInLoop = false; for (let i = 1; i <= numWeeksToAttempt; i++) {  let nextBookingDate = new Date(originalDate); nextBookingDate.setDate(nextBookingDate.getDate() + (i * 7)); const nextDateKey = formatDate(nextBookingDate); let dayDataForNextWeek = getDayData(nextDateKey); if (!dayDataForNextWeek.activeSlots[hourKey]) { failedAttemptsLog.push(`Sem. ${i} (${getDisplayableDate(nextBookingDate, {day:'numeric', month:'short'})}): Horario no activo.`); continue; } let availableBed = -1; for (let bed = 1; bed <= bedCount; bed++) { if (!dayDataForNextWeek.bookings[`bed${bed}-${hourKey}`]) { availableBed = bed; break; } } if (availableBed === -1) { failedAttemptsLog.push(`Sem. ${i} (${getDisplayableDate(nextBookingDate, {day:'numeric', month:'short'})}): Sin camas libres.`); continue; } if (getClientById(clientId).paqueteActivo.clasesRestantes < 1) { failedAttemptsLog.push(`Sem. ${i} (${getDisplayableDate(nextBookingDate, {day:'numeric', month:'short'})}): Cliente sin clases suficientes.`); break; } dayDataForNextWeek.slotTeachers[hourKey] = teacherName;  dayDataForNextWeek.bookings[`bed${availableBed}-${hourKey}`] = clientId; saveDayData(nextDateKey, dayDataForNextWeek);  if(deductClassFromClient(clientId)) clientDataChangedInLoop = true; successfullyBookedCount++; } if(clientDataChangedInLoop) saveClients(); let summaryHTML = `<p><strong>Resumen:</strong></p><p>Agendadas: <strong>${successfullyBookedCount} clase(s)</strong>.</p>`; if (failedAttemptsLog.length > 0) { summaryHTML += `<p>Fallos (${failedAttemptsLog.length}):</p><ul>`; failedAttemptsLog.forEach(log => summaryHTML += `<li>${log}</li>`); summaryHTML += `</ul>`; } client = getClientById(clientId);  summaryHTML += `<p>A ${client.nombreCliente} le quedan ahora: <strong>${client.paqueteActivo.clasesRestantes} clase(s)</strong>.</p>`; weeklyRepeatSummaryReport.innerHTML = summaryHTML; confirmRepeatWeeklyButton.disabled = false; renderSchedule();  repeatClientClassesRemaining.textContent = client.paqueteActivo.clasesRestantes; const maxSuggest = client.paqueteActivo.clasesRestantes; repeatMaxWeeksSuggestion.textContent = maxSuggest; repeatWeeksInput.max = maxSuggest; if (maxSuggest === 0) repeatWeeksInput.value = 0; showFeedbackMessage("🗓️ Proceso de repetición completado.", "info", 3000); });

    function handleGenerateReminder() { if (!currentEditingSlotData) { showFeedbackMessage("⚠️ No hay reserva seleccionada.", "warning"); return; } const slotId = `bed${currentEditingSlotData.bed}-${currentEditingSlotData.hourKey}`; const dateKey = formatDate(currentDate); const dayData = getDayData(dateKey); const bookedClientIdForReminder = dayData.bookings[slotId]; if (!bookedClientIdForReminder) { showFeedbackMessage("⚠️ No hay cliente en esta reserva.", "warning"); return; } const client = getClientById(bookedClientIdForReminder);  if (!client) { showFeedbackMessage("⚠️ Error: Cliente no encontrado.", "error"); return; } const teacherName = getEffectiveTeacherForSlot(currentEditingSlotData.hourKey, dayData); const clientName = client.nombreCliente; const classTime = formatTimeForDisplay(currentEditingSlotData.time); const classDateStr = getDisplayableDate(currentDate, { weekday: 'long', day: 'numeric', month: 'long' }); const classesRestantesParaNuevasReservas = client.paqueteActivo.clasesRestantes; let reminderMsg = `¡Hola ${clientName}! 👋\nTe recordamos tu clase en ALIZEN Pilates para el ${classDateStr} a las ${classTime}`; if (teacherName) reminderMsg += ` con ${teacherName}`; reminderMsg += `.\n\n`; getFutureBookingsDetailsForClient(client.idUnicoCliente).then(allFutureBookingsList => { const currentReminderDateKey = formatDate(currentDate); const currentReminderHourKey = currentEditingSlotData.hourKey; const otherFutureBookingsList = allFutureBookingsList.filter(booking => !(booking.dateKey === currentReminderDateKey && booking.hourKey === currentReminderHourKey)); const numberOfOtherFutureBookings = otherFutureBookingsList.length; let middleMessagePart = ""; if (classesRestantesParaNuevasReservas <= 0 && numberOfOtherFutureBookings === 0) { middleMessagePart = "¡Esta es tu última clase del paquete actual! Esperamos que la disfrutes al máximo. 😊 Si quieres seguir con nosotros, ¡pregunta por nuestros paquetes de renovación! 😉"; } else if (classesRestantesParaNuevasReservas <= 0 && numberOfOtherFutureBookings > 0) { middleMessagePart = `¡Genial! Ya tienes todas tus clases de este paquete agendadas. Después de esta, tus próximas ${Math.min(numberOfOtherFutureBookings, 3)} clases programadas son:\n`; otherFutureBookingsList.slice(0, 3).forEach(b => { middleMessagePart += `* ${b.displayDate} a las ${b.displayTime}\n`; }); if (numberOfOtherFutureBookings > 3) middleMessagePart += `(¡Y tienes ${numberOfOtherFutureBookings - Math.min(numberOfOtherFutureBookings, 3)} más después de esas!)\n`; } else { middleMessagePart = `Después de esta sesión, aún tendrás ${classesRestantesParaNuevasReservas} clase${classesRestantesParaNuevasReservas !== 1 ? 's' : ''} disponible${classesRestantesParaNuevasReservas !== 1 ? 's' : ''} en tu paquete para que sigas agendando.`; if (numberOfOtherFutureBookings > 0) { middleMessagePart += `\nAdemás, ¡ya tienes estas próximas ${Math.min(numberOfOtherFutureBookings, 3)} clases en tu agenda con nosotros!:\n`; otherFutureBookingsList.slice(0, 3).forEach(b => { middleMessagePart += `* ${b.displayDate} a las ${b.displayTime}\n`; }); if (numberOfOtherFutureBookings > 3) middleMessagePart += `(¡Y tienes ${numberOfOtherFutureBookings - Math.min(numberOfOtherFutureBookings, 3)} más después de esas!)\n`; } } reminderMsg += middleMessagePart; const cancellationPolicy = "Tienes hasta 3 horas antes de tu clase para cancelar o reagendar sin perderla."; reminderMsg += `\n\nRecuerda: ${cancellationPolicy}`; reminderMsg += `\n\n¡Te vemos pronto! ✨ - ALIZEN Pilates`; reminderModalTitle.textContent = `Recordatorio para ${clientName}`; reminderTextContentElement.textContent = reminderMsg; copyReminderMessageButton.textContent = '📋 Copiar Mensaje'; reminderTextModal.style.display = 'flex'; }).catch(err => { console.error("Error generando detalles de clases futuras para recordatorio:", err); showFeedbackMessage("⚠️ Error al generar detalles del recordatorio.", "error"); }); }
    function closeReminderTextModal() { reminderTextModal.style.display = 'none'; }
    generateReminderButton.addEventListener('click', handleGenerateReminder);

    function generateAndShowAvailabilitySummary() {  const dateKey = formatDate(currentDate); const dayData = getDayData(dateKey); const bookings = dayData.bookings; const activeSlots = dayData.activeSlots; let message = `¡Hola! 😊 En ALIZEN Pilates, tenemos estos espacios disponibles para el ${getDisplayableDate(currentDate, { weekday: 'long', day: 'numeric', month: 'long' })}:\n\n`; const availabilityLines = []; const actualSystemDate = new Date(); const currentSystemHour = actualSystemDate.getHours(); const isViewingToday = (formatDate(currentDate) === formatDate(actualSystemDate)); let futureSlotsExistAndActive = false; let dayIsPast = false; const todayForComparison = new Date(actualSystemDate.getFullYear(), actualSystemDate.getMonth(), actualSystemDate.getDate()); const currentDateForComparison = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()); if (currentDateForComparison < todayForComparison) dayIsPast = true; allTimeSlots.forEach(hour => { const hourKey = formatHourForSlotKey(hour); if (!activeSlots[hourKey]) return;  let isPastSlotForSummary = (isViewingToday && hour < currentSystemHour) || dayIsPast; if (isPastSlotForSummary) return; futureSlotsExistAndActive = true; let freeBedsCount = 0; for (let bed = 1; bed <= bedCount; bed++) { if (!bookings[`bed${bed}-${hourKey}`]) freeBedsCount++; } if (freeBedsCount > 0) { let line = `- ${freeBedsCount} cama${freeBedsCount > 1 ? 's' : ''} libre${freeBedsCount > 1 ? 's' : ''} a las ${formatTimeForDisplay(hour)}`; const effectiveTeacher = getEffectiveTeacherForSlot(hourKey, dayData); if (effectiveTeacher) { line += ` con ${effectiveTeacher}`; } line += "."; availabilityLines.push(line); } }); if (dayIsPast) { message += "Este es un día pasado. No hay disponibilidad futura aquí. 😊"; } else if (!futureSlotsExistAndActive) { message += isViewingToday ? "Hoy no quedan horarios disponibles o activos. ¡Consulta para mañana! 😉" : "Para este día no hay camas disponibles en los horarios activos y futuros. 🙁"; } else { if (availabilityLines.length > 0) { message += availabilityLines.join('\n') + "\n\n"; } else if (futureSlotsExistAndActive) { message += "Todos los horarios futuros y activos para este día están completamente reservados. 🎉\n\n"; } } message += "¡Avísanos si quieres reservar tu lugar! 😉 - ALIZEN Pilates"; summaryModalTitle.textContent = `Disponibilidad para ${getDisplayableDate(currentDate, { weekday: 'long', day: 'numeric' })}`; whatsappSummaryTextElement.textContent = message; summaryTextModal.style.display = 'flex'; copySummaryButton.textContent = '📋 Copiar Mensaje'; }
    function closeSummaryModal() { summaryTextModal.style.display = 'none'; }
    copySummaryButton.addEventListener('click', () => { navigator.clipboard.writeText(whatsappSummaryTextElement.textContent).then(() => { copySummaryButton.textContent = '¡Copiado! 👍'; showFeedbackMessage('📋 Mensaje copiado', 'success', 1500); setTimeout(() => { copySummaryButton.textContent = '📋 Copiar Mensaje'; }, 2000); }).catch(err => { console.error('Error al copiar: ', err); showFeedbackMessage("⚠️ Error al copiar.", "error"); }); });
    
    function openQuickHelpModal() { quickHelpModal.style.display = 'flex'; }
    function closeQuickHelpModal() { quickHelpModal.style.display = 'none'; }

    // --- EXPORTAR DATOS ---
    function openExportDataModal() { exportedDataTextarea.value = ""; exportDataModal.style.display = 'flex'; }
    function closeExportDataModal() { exportDataModal.style.display = 'none'; }
    exportClientsReadableButton.addEventListener('click', () => { let readableClients = `LISTA DE CLIENTES - ALIZEN PILATES (${getDisplayableDate(new Date(), {day:'numeric', month:'long', year:'numeric'})})\n----------------------------------------------------\n`; if (clients.length === 0) { readableClients += "(No hay clientes registrados)\n"; } else { clients.sort((a,b) => (a.numeroClienteVisible || Infinity) - (b.numeroClienteVisible || Infinity)).forEach(client => { readableClients += `Nº: ${client.numeroClienteVisible || 'S/N'}\nNombre: ${client.nombreCliente}\nTeléfono: ${client.telefono || '-'}\nCorreo: ${client.correo || '-'}\nPaquete: ${client.paqueteActivo.nombrePaquete}\nClases Restantes: ${client.paqueteActivo.clasesRestantes}\nÚlt. Compra: ${getDisplayableDate(new Date(client.paqueteActivo.fechaDeCompra), {day:'numeric', month:'short', year:'numeric'})}\nPago: ${client.paqueteActivo.metodoPago || 'N/A'} (Ref: ${client.paqueteActivo.referenciaPago || 'N/A'})\n----------------------------------------------------\n`; }); } exportedDataTextarea.value = readableClients; showFeedbackMessage("Lista de clientes legible generada.", "info", 3000); });
    exportClientsJsonButton.addEventListener('click', () => { const clientsJSON = JSON.stringify(clients, null, 2); exportedDataTextarea.value = clientsJSON; showFeedbackMessage("Respaldo Técnico de Clientes (JSON) generado.", "info", 3000); });
    function generateAgendaData(isJsonFormat) { const period = exportAgendaPeriodSelect.value; let startDate = new Date(); startDate.setHours(0,0,0,0); let endDate = new Date(startDate); endDate.setHours(23,59,59,999);  const todayForCompare = new Date(startDate); switch(period) { case 'next7days': endDate.setDate(todayForCompare.getDate() + 6); break; case 'next30days': endDate.setDate(todayForCompare.getDate() + 29); break; case 'currentMonth': startDate = new Date(todayForCompare.getFullYear(), todayForCompare.getMonth(), 1); endDate = new Date(todayForCompare.getFullYear(), todayForCompare.getMonth() + 1, 0); break; case 'nextMonth': startDate = new Date(todayForCompare.getFullYear(), todayForCompare.getMonth() + 1, 1); endDate = new Date(todayForCompare.getFullYear(), todayForCompare.getMonth() + 2, 0); break; } let outputText = ""; if (isJsonFormat) { let agendaDataForExport = []; for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) { const dateKey = formatDate(d); const dayData = getDayData(dateKey); let hasData = Object.keys(dayData.bookings).length > 0; if (!hasData) { for(const hourKey in dayData.slotTeachers){ if(dayData.slotTeachers[hourKey] && dayData.activeSlots[hourKey]){ hasData = true; break; } } } if (hasData) { agendaDataForExport.push({ date: dateKey, ...dayData }); } } outputText = JSON.stringify(agendaDataForExport, null, 2); } else { outputText = `Agenda Ocupada - ALIZEN PILATES\nPeriodo: ${getDisplayableDate(startDate, {day:'numeric',month:'long'})} - ${getDisplayableDate(endDate, {day:'numeric',month:'long', year:'numeric'})}\n-------------------------------------\n`; let foundAnyBookingInPeriod = false; for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) { const dateKey = formatDate(d); const dayData = getDayData(dateKey); let dailyBookingsOutput = ""; let dailyBookingsFoundThisDay = false; allTimeSlots.forEach(hour => { const hourKey = formatHourForSlotKey(hour); if (!dayData.activeSlots[hourKey]) return; const effectiveTeacherName = getEffectiveTeacherForSlot(hourKey, dayData); let bedsBookedInThisSlotContent = ""; let occupiedBedsCountThisSlot = 0; for (let bed = 1; bed <= bedCount; bed++) { const slotId = `bed${bed}-${hourKey}`; const bookedClientId = dayData.bookings[slotId]; if (bookedClientId) { occupiedBedsCountThisSlot++; const client = getClientById(bookedClientId); const clientNameForDisplay = client ? client.nombreCliente : "Cliente Desconocido"; const clientNumberDisplay = client && client.numeroClienteVisible ? `(Nº ${client.numeroClienteVisible})` : ""; bedsBookedInThisSlotContent += `      Cama ${bed}: ${clientNameForDisplay} ${clientNumberDisplay}\n`; } } if (occupiedBedsCountThisSlot > 0) { if (!dailyBookingsFoundThisDay) { dailyBookingsOutput += `\n${getDisplayableDate(d, {weekday: 'long', day: 'numeric', month: 'long'})}:\n`; } dailyBookingsFoundThisDay = true; foundAnyBookingInPeriod = true; dailyBookingsOutput += `  - ${formatTimeForDisplay(hour)}`; if (effectiveTeacherName) dailyBookingsOutput += ` (Prof: ${effectiveTeacherName})`; dailyBookingsOutput += ` (Camas ocupadas: ${occupiedBedsCountThisSlot}):\n`; dailyBookingsOutput += bedsBookedInThisSlotContent; } }); if (dailyBookingsFoundThisDay) { outputText += dailyBookingsOutput; } } if (!foundAnyBookingInPeriod) outputText += "\nNo se encontraron reservas en el periodo seleccionado."; } exportedDataTextarea.value = outputText; showFeedbackMessage("Datos de agenda generados. ¡Copia el texto!", "info", 3000); }
    exportAgendaReadableButton.addEventListener('click', () => generateAgendaData(false)); 
    exportAgendaJsonButton.addEventListener('click', () => generateAgendaData(true)); 
    copyExportedDataButton.addEventListener('click', () => { if (!exportedDataTextarea.value) { showFeedbackMessage("⚠️ No hay datos para copiar.", "warning"); return; } exportedDataTextarea.select(); try { document.execCommand('copy'); showFeedbackMessage("📋 ¡Texto copiado!", "success"); } catch (err) { showFeedbackMessage("⚠️ Error al copiar. Usa Ctrl+C.", "error"); console.error('Error al copiar con execCommand: ', err); } });
    

    // --- EVENT LISTENERS GENERALES ---
    closeBookingModalButton.addEventListener('click', closeBookingModal);
    closeSummaryModalButton.addEventListener('click', closeSummaryModal);
    closeQuickHelpModalButton.addEventListener('click', closeQuickHelpModal);
    closeSlotStatusConfigModalButton.addEventListener('click', closeSlotStatusConfigModal);
    closeReminderTextModalButton.addEventListener('click', closeReminderTextModal); 
    closeWeeklyRepeatModalButton.addEventListener('click', closeWeeklyRepeatModal); 
    closeEditClientModalButton.addEventListener('click', closeEditClientModal);
    closeExportDataModalButton.addEventListener('click', closeExportDataModal);
    closeViewBookedClassesModalButton.addEventListener('click', closeViewBookedClassesModal);
    

    quickHelpButton.addEventListener('click', openQuickHelpModal);
    manageClientsButton.addEventListener('click', showClientManagementView);
    managePackagesButton.addEventListener('click', openPackagesModal);
    closePackagesModalButton.addEventListener('click', closePackagesModal);
    addPackageButton.addEventListener('click', addPackageHandler);
    backToScheduleButton.addEventListener('click', showScheduleView);

    quickHelpButton.addEventListener('click', openQuickHelpModal);

    manageClientsButton.addEventListener('click', showClientManagementView);
    managePackagesButton.addEventListener('click', openPackagesModal);
    closePackagesModalButton.addEventListener('click', closePackagesModal);
    addPackageButton.addEventListener('click', addPackageFromForm);
    packagesTableBody.addEventListener('click', handleDeletePackageClick);
    backToScheduleButton.addEventListener('click', showScheduleView);
    quickAddClientBtnFromBooking.addEventListener('click', () => { closeBookingModal(); showClientManagementView(); setTimeout(() => newClientNameInput.focus(), 50); });
    exportDataButton.addEventListener('click', openExportDataModal);

    window.addEventListener('click', (event) => { 
        const modalsToCloseOnClickOutside = [bookingModal, summaryTextModal, quickHelpModal, slotStatusConfigModal, reminderTextModal, weeklyRepeatModal, editClientModal, exportDataModal, viewBookedClassesModal, packagesModal];

    manageClientsButton.addEventListener('click', showClientManagementView);
    managePackagesButton.addEventListener('click', openPackagesModal);
    closePackagesModalButton.addEventListener('click', closePackagesModal);
    addPackageButton.addEventListener('click', addPackageFromForm);

    packagesTableBody.addEventListener('click', handlePackagesTableClick);

    packagesTableBody.addEventListener('click', handleDeletePackageClick);

    backToScheduleButton.addEventListener('click', showScheduleView);

    quickAddClientBtnFromBooking.addEventListener('click', () => { closeBookingModal(); showClientManagementView(); setTimeout(() => newClientNameInput.focus(), 50); });
    exportDataButton.addEventListener('click', openExportDataModal);

    window.addEventListener('click', (event) => { 
        const modalsToCloseOnClickOutside = [bookingModal, summaryTextModal, quickHelpModal, slotStatusConfigModal, reminderTextModal, weeklyRepeatModal, editClientModal, exportDataModal, viewBookedClassesModal, packagesModal];

        if (clientManagementView.style.display === 'none') { // Solo si NO estamos en la vista de gestión de clientes
            modalsToCloseOnClickOutside.forEach(modal => { if (event.target === modal) modal.style.display = 'none'; });
        } else { // Si estamos en la vista de gestión de clientes, solo permitir cerrar modales específicos
             if (event.target === editClientModal) closeEditClientModal();
             if (event.target === viewBookedClassesModal) closeViewBookedClassesModal();
             // No cerrar exportDataModal con click afuera si está sobre la vista de clientes
        }
    });
    window.addEventListener('keydown', (event) => { 
        if (event.key === 'Escape') {
            if (exportDataModal.style.display === 'flex') closeExportDataModal();
            else if (viewBookedClassesModal.style.display === 'flex') closeViewBookedClassesModal();
            else if (editClientModal.style.display === 'flex') closeEditClientModal();
            else if (clientManagementView.style.display !== 'none') { /* No cerrar con ESC */ }
            else if (bookingModal.style.display === 'flex') closeBookingModal(); 
            else if (summaryTextModal.style.display === 'flex') closeSummaryModal();
            else if (quickHelpModal.style.display === 'flex') closeQuickHelpModal(); 
            else if (slotStatusConfigModal.style.display === 'flex') closeSlotStatusConfigModal(); 

            else if (reminderTextModal.style.display === 'flex') closeReminderTextModal();
            else if (weeklyRepeatModal.style.display === 'flex') closeWeeklyRepeatModal();
            else if (packagesModal.style.display === 'flex') closePackagesModal();
        }
    });
    
    // --- INICIALIZACIÓN ---
    function initializeApp() {
        loadPackages();
        loadClients();

            else if (reminderTextModal.style.display === 'flex') closeReminderTextModal();
            else if (weeklyRepeatModal.style.display === 'flex') closeWeeklyRepeatModal();
            else if (packagesModal.style.display === 'flex') closePackagesModal();
        }
    });
    
    // --- INICIALIZACIÓN ---
    function initializeApp() {

        loadPackages();
        loadClients();

        loadPackages();
        loadClients();


        updateDateDisplay();
        renderSchedule(); 
        showFeedbackMessage("✨ ¡Súper Agenda de Alizen Pilates Lista! ✨", "success", 2000);
    }
    showSummaryButton.addEventListener('click', generateAndShowAvailabilitySummary);
    initializeApp();
});