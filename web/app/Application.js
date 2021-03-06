/*
 * Copyright 2015 Anton Tananaev (anton.tananaev@gmail.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Ext.define('Traccar.Application', {
    extend: 'Ext.app.Application',
    name: 'Traccar',

    requires: [
        'Traccar.Resources',
        'Traccar.ErrorManager'
    ],
    
    models: [
        'Server',
        'User',
        'Device',
        'Position'
    ],
    
    stores: [
        'Devices',
        'Positions',
        'LiveData'
    ],

    controllers: [
        'Root'
    ],
    
    setUser: function(user) {
        this.user = user;
    },
    
    getUser: function() {
        return this.user;
    },
    
    setServer: function(server) {
        this.server = server;
    },
    
    getServer: function() {
        return this.server;
    }
    
});
