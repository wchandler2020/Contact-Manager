from contacts.models import Contact
from rest_framework import viewsets, permissions
from .serializers import ContactSeriaiizer

# Contact Viewset


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ContactSeriaiizer
