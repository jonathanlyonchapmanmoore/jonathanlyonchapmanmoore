﻿'------------------------------------------------------------------------------
' <auto-generated>
'     This code was generated by a tool.
'     Runtime Version:4.0.30319.42000
'
'     Changes to this file may cause incorrect behavior and will be lost if
'     the code is regenerated.
' </auto-generated>
'------------------------------------------------------------------------------

Option Strict Off
Option Explicit On

Imports System.Xml.Serialization

'
'This source code was auto-generated by xsd, Version=4.6.1055.0.
'

'''<remarks/>
<System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.6.1055.0"),  _
 System.SerializableAttribute(),  _
 System.Diagnostics.DebuggerStepThroughAttribute(),  _
 System.ComponentModel.DesignerCategoryAttribute("code"),  _
 System.Xml.Serialization.XmlTypeAttribute([Namespace]:="http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader"),  _
 System.Xml.Serialization.XmlRootAttribute([Namespace]:="http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader", IsNullable:=false)>  _
Partial Public Class DocumentIdentification
    
    Private standardField As String
    
    Private typeVersionField As String
    
    Private instanceIdentifierField As String
    
    Private typeField As String
    
    Private multipleTypeField As Boolean
    
    Private multipleTypeFieldSpecified As Boolean
    
    Private creationDateAndTimeField As Date
    
    '''<remarks/>
    Public Property Standard() As String
        Get
            Return Me.standardField
        End Get
        Set
            Me.standardField = value
        End Set
    End Property
    
    '''<remarks/>
    Public Property TypeVersion() As String
        Get
            Return Me.typeVersionField
        End Get
        Set
            Me.typeVersionField = value
        End Set
    End Property
    
    '''<remarks/>
    Public Property InstanceIdentifier() As String
        Get
            Return Me.instanceIdentifierField
        End Get
        Set
            Me.instanceIdentifierField = value
        End Set
    End Property
    
    '''<remarks/>
    Public Property Type() As String
        Get
            Return Me.typeField
        End Get
        Set
            Me.typeField = value
        End Set
    End Property
    
    '''<remarks/>
    Public Property MultipleType() As Boolean
        Get
            Return Me.multipleTypeField
        End Get
        Set
            Me.multipleTypeField = value
        End Set
    End Property
    
    '''<remarks/>
    <System.Xml.Serialization.XmlIgnoreAttribute()>  _
    Public Property MultipleTypeSpecified() As Boolean
        Get
            Return Me.multipleTypeFieldSpecified
        End Get
        Set
            Me.multipleTypeFieldSpecified = value
        End Set
    End Property
    
    '''<remarks/>
    Public Property CreationDateAndTime() As Date
        Get
            Return Me.creationDateAndTimeField
        End Get
        Set
            Me.creationDateAndTimeField = value
        End Set
    End Property
End Class
