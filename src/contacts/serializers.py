from rest_framework import serializers
from contacts.models import Contact

# serializer


class ContactSeriaiizer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
