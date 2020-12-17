// Milestone 1

// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
// dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione

var app = new Vue({

    el: '#app',

    data:{
        contacts: [
            
            // contatto 1
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    
                    // messaggio 1
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    
                     // messaggio 2
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    
                     // messaggio 3
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            
            // contatto 2
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [

                     // messaggio 1
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },

                     // messaggio 2
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },

                     // messaggio 3
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            
            // contatto 3
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [

                     // messaggio 1
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },

                     // messaggio 2
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },

                     // messaggio 3
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },

            // contatto 4
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [

                     // messaggio 1
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },

                     // messaggio 2
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },

        // fine contacts
        ]
    },

    methods: {
        miaFunzione: function () {
            //Codice
        }
    }

}); 